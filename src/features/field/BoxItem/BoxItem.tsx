import cn from 'classnames'
import styles from './BoxItem.module.scss'

export type BoxToRemove = {
  e: React.PointerEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>
  x: number
  y: number
  level: number
}

type Props = {
  positionKey: string
  cellSize: number
  level: number
  isUpper: boolean
  onRemove: (val: BoxToRemove) => void
}

function BoxItem({ positionKey, cellSize, level, isUpper, onRemove }: Props) {
  const [x, y, z] = positionKey.split('-').map(Number)

  return (
    <div
      className={cn(styles.box, styles[`x-${x}`], styles[`y-${y}`], styles[`z-${z}`], {
        [styles.upper]: isUpper,
      })}
      style={{
        left: `${x * cellSize}px`,
        top: `${y * cellSize}px`,
        zIndex: level * 100 + y * 10 + 10 - x,
      }}
    >
      {isUpper && <div className={styles.shadow} />}
      <div
        className={styles.cap}
        onClick={e => onRemove({ e, x, y, level })}
        onPointerDown={e => onRemove({ e, x, y, level })}
      >
        <div className={styles.sticker} />
      </div>
    </div>
  )
}

export default BoxItem
