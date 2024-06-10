import { useState } from 'react'
import Box from '@/components/common/Box/Box'
import Button from '@/components/common/Button/Button'
import Heading from '@/components/common/Heading/Heading'
import { useGameStore } from '@/features/game/gameStore'
import { FieldBoard } from '../../field/FieldBoard/FieldBoard'
import { Field } from '../../field/types'
import { Channel } from '../types'
import styles from './ChannelItem.module.scss'

type Props = {
  damage: number
  channel: Channel
  onBack: () => void
  onNext: () => void
}

function ChannelItem({ channel, damage, onNext, onBack }: Props) {
  const { increaseGameBalance } = useGameStore()

  const [field, setField] = useState<Field>(channel.field || {})

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
    increaseGameBalance(removedIds.length)
    console.log('Removed box IDs:', removedIds)
  }

  return (
    <div className={styles.channel}>
      <Box mb="6">
        <Heading size="h1">{channel.name}</Heading>
      </Box>

      <FieldBoard
        field={field}
        cover={channel.cover}
        damage={damage}
        onNext={onNext}
        onBoxesRemoved={handleBoxesRemoved}
      />

      <p>
        <Button variant="accent" onClick={onBack}>
          Back
        </Button>
      </p>
    </div>
  )
}

export default ChannelItem
