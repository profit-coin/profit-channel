import { FC } from 'react'
import { Box } from '../types'
import styles from './BoxItem.module.scss'

export type BoxToRemove = {
  e: React.PointerEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>
  x: number
  y: number
  level: number
}

type Props = {
  box: Box
  positionKey: string
  cellSize: number
  level: number
  onRemove: (val: BoxToRemove) => void
}

export const BoxItem: FC<Props> = ({ box, positionKey, cellSize, level, onRemove }) => {
  const [x, y] = positionKey.split('-').map(Number)

  return (
    <div
      className={styles.box}
      style={{
        left: `${x * cellSize}px`,
        top: `${y * cellSize}px`,
        zIndex: level * 100 + y * 10 + 10 - x,
      }}
    >
      <div
        className={styles.cap}
        onClick={e => onRemove({ e, x, y, level })}
        onPointerDown={e => onRemove({ e, x, y, level })}
      >
        <div>ID: {box.id}</div>
        <div>L: {box.level}</div>
        <div>B: {box.below.join(', ') || '--'}</div>
      </div>
    </div>
  )
}
