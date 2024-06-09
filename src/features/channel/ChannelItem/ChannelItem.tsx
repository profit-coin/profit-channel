import { useState } from 'react'
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
      <h2 className={styles.title}>{channel.name}</h2>
      <FieldBoard
        field={field}
        cover={channel.cover}
        damage={damage}
        onNext={onNext}
        onBoxesRemoved={handleBoxesRemoved}
      />

      <p>
        <button onClick={onBack}>Back</button>
      </p>
    </div>
  )
}

export default ChannelItem
