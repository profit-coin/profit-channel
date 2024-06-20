import { useCallback, useEffect, useState } from 'react'
import Box from '@/components/common/Box/Box'
import Button from '@/components/common/Button/Button'
import Heading from '@/components/common/Heading/Heading'
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
  onNext: () => void
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
  } = useGameStore()

  const { data: settingsData, error: settingsError, isLoading: isSettingsLoading } = useSettings()
  const sendPointsMutation = useSendPoints()

  const [field, setField] = useState<Field | null>(null)

  useEffect(() => {
    if (gameSettings && channelGame) {
      setField(distributeBoxes(channelGame.cell_num, gameSettings.field_size))
    }
  }, [channelGame, gameSettings])

  const addPoints = useCallback(
    (points: number) => {
      accumulatePoints(points)
    },
    [accumulatePoints],
  )

  const handleSendPoints = useCallback(() => {
    sendPointsMutation.mutate(accumulatedPoints)
  }, [accumulatedPoints, sendPointsMutation])

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
    // console.log('Removed box IDs:', removedIds)
  }

  return (
    <div className={styles.channel}>
      <Box mb="6">
        <Heading size="h1">{channelGame.channel.name}</Heading>
      </Box>

      {field && (
        <FieldBoard
          field={field}
          cover={channelGame.channel.icon_url}
          damage={settingsData?.damage || 1}
          onNext={onNext}
          onBoxesRemoved={handleBoxesRemoved}
        />
      )}

      <p>
        <Button variant="accent" onClick={onBack}>
          Back
        </Button>
      </p>
    </div>
  )
}

export default ChannelItem
