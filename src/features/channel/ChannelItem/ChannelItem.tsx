import { useCallback, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import Button from '@/components/common/Button/Button'
import { useGameStore } from '@/features/game/gameStore'
import { useSendPoints } from '@/hooks/useApi'
import { distributeBoxes } from '@/utils/distributeBoxes'
import FieldBoard from '../../field/FieldBoard/FieldBoard'
import { Field } from '../../field/types'
import styles from './ChannelItem.module.scss'
import { InternalGameChannel } from '@/data/channels'
import { IGameSettings } from '../types'
import {useAddCoinsMutation} from '@/data/coins'

type Props = {
  onBack: () => void
  onNext?: () => void
  channel: InternalGameChannel
  gameSettings: IGameSettings
}

function ChannelItem({ channel, gameSettings, onNext, onBack }: Props) {
  const {
    accumulatedPoints,
    accumulatePoints,
    setGameBalance,
  } = useGameStore()

  const sendPointsMutation = useSendPoints()
  const addCoinsMutation = useAddCoinsMutation();

  const [field, setField] = useState<Field | null>(null)
  const lastTapTimeRef = useRef<number | null>(null)
  const pointsSentRef = useRef<boolean>(false)

  useEffect(() => {
    if (gameSettings && channel) {
      setField(distributeBoxes(channel.leftPeriodLimit, gameSettings.field_size))
    }
  }, [channel, gameSettings])

  const addPoints = useCallback(
    (points: number) => {
      accumulatePoints(points)
      lastTapTimeRef.current = Date.now()
      pointsSentRef.current = false
    },
    [accumulatePoints],
  )

  const handleSendPoints = useCallback(() => {
    if (pointsSentRef.current) return
    pointsSentRef.current = true

    addCoinsMutation.mutate({
      amount: accumulatedPoints,
      targetChannelTelegramId: channel.telegramId,
    }, {
      onSuccess: data => {
        useGameStore.setState({
          accumulatedPoints: 0,
        }) // Reset accumulatedPoints after sending
      },
    })

    // sendPointsMutation.mutate(accumulatedPoints, {
    //   onSuccess: data => {
    //     setGameBalance(data.gameBalance)
    //     useGameStore.setState({ accumulatedPoints: 0 }) // Reset accumulatedPoints after sending
    //   },
    // })
  }, [accumulatedPoints, sendPointsMutation, setGameBalance])

  useEffect(() => {
    const interval = setInterval(() => {
      if (lastTapTimeRef.current && Date.now() - lastTapTimeRef.current > 1000) {
        handleSendPoints()
        lastTapTimeRef.current = null // Reset the timer
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [handleSendPoints])

  useEffect(() => {
    if (!field) return
    if (Object.keys(field).length === 0) {
      handleSendPoints()
    }
  }, [field, handleSendPoints])

  const handleBoxesRemoved = (removedIds: number[]) => {
    const newField = { ...field }

    removedIds.forEach(id => {
      Object.keys(newField).forEach(key => {
        newField[key] = newField[key].filter(box => box.id !== id)
        if (newField[key].length === 0) {
          delete newField[key]
        }
      })
    })

    setField(newField)
    addPoints(removedIds.length)
  }

  return (
    <div className={styles.channel}>
      <header className={styles.header}>
        <h1 className={cn('namePlate', styles.channelName)}>{channel.title}</h1>
      </header>

      {field && (
        <FieldBoard
          field={field}
          cover={channel.avatar}
          damage={gameSettings.damage || 1}
          onNext={onNext}
          onBoxesRemoved={handleBoxesRemoved}
        />
      )}

      <footer className={styles.footer}>
        <Button variant="accent" onClick={onBack}>
          Back
        </Button>
      </footer>
    </div>
  )
}

export default ChannelItem
