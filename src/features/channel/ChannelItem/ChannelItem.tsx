import { useCallback, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import Button from '@/components/common/Button/Button'
import { useGameStore } from '@/features/game/gameStore'
import { useSendPoints, useSettings } from '@/hooks/useApi'
import { distributeBoxes } from '@/utils/distributeBoxes'
import FieldBoard from '../../field/FieldBoard/FieldBoard'
import { Field } from '../../field/types'
import { IGameItem } from '../types'
import styles from './ChannelItem.module.scss'

type Props = {
  channelGame: IGameItem
  onBack: () => void
  onNext?: () => void
}

function ChannelItem({ channelGame, onNext, onBack }: Props) {
  const {
    gameBalance,
    playerLevel,
    levelProgress,
    accumulatedPoints,
    accumulatePoints,
    gameSettings,
    isLoading,
    error,
    clearError,
    setGameBalance,
  } = useGameStore()

  const { data: settingsData, error: settingsError, isLoading: isSettingsLoading } = useSettings()
  const sendPointsMutation = useSendPoints()

  const [field, setField] = useState<Field | null>(null)
  const lastTapTimeRef = useRef<number | null>(null)
  const pointsSentRef = useRef<boolean>(false)

  useEffect(() => {
    if (settingsData) {
      useGameStore.setState({ gameSettings: settingsData })
    }
  }, [settingsData])

  useEffect(() => {
    if (gameSettings && channelGame) {
      setField(distributeBoxes(channelGame.cell_num, gameSettings.field_size))
    }
  }, [channelGame, gameSettings])

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
    sendPointsMutation.mutate(accumulatedPoints, {
      onSuccess: data => {
        setGameBalance(data.gameBalance)
        useGameStore.setState({ accumulatedPoints: 0 }) // Reset accumulatedPoints after sending
      },
    })
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
        <h1 className={cn('namePlate', styles.channelName)}>{channelGame.channel.name}</h1>
      </header>

      {field && (
        <FieldBoard
          field={field}
          cover={channelGame.channel.icon_url}
          damage={settingsData?.damage || 1}
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
