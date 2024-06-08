/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useRef, useState } from 'react'
import { Timer } from '../../../components/Timer/Timer'
import { BoxExplosion } from '../BoxExplosion/BoxExplosion'
import { BoxItem, BoxToRemove } from '../BoxItem/BoxItem'
import { PointAnimation } from '../PointAnimation/PointAnimation'
import { Field } from '../types'
import styles from './FieldBoard.module.scss'

type Props = {
  field: Field
  damage: number
  cover?: string
  onNext: () => void
  onBoxesRemoved: (removedIds: number[]) => void
}

export const FieldBoard: FC<Props> = ({ field, damage, cover, onNext, onBoxesRemoved }) => {
  const screenSize = 320
  const cellSize = screenSize / 5

  const isEmpty = Object.keys(field).length === 0

  const levels: number[] = Array.from(
    new Set(Object.keys(field).map(key => parseInt(key.split('-')[2]))),
  )

  const boardRef = useRef<HTMLDivElement>(null)
  const [currentField, setCurrentField] = useState<Field>(field)

  const [animations, setAnimations] = useState<
    { id: number; count: number; x: number; y: number }[]
  >([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    setCurrentField(field)
  }, [field])

  const findBoxes = (x: number, y: number, level: number): number[] => {
    const boxes: number[] = []
    let levelsToRemove = damage
    let currentLevel = level
    const localField = { ...currentField }

    while (levelsToRemove > 0 && currentLevel >= 0) {
      const positionKey = `${x}-${y}-${currentLevel}`
      if (localField[positionKey] && localField[positionKey].length > 0) {
        const targetBox = localField[positionKey].pop()
        if (targetBox) {
          boxes.push(targetBox.id)
          levelsToRemove--
        }
      }
      currentLevel--
    }

    return boxes
  }
  const addPointAnimation = (count: number, x: number, y: number) => {
    const newAnimation = { id: nextId, count, x, y }
    setAnimations(prev => [...prev, newAnimation])
    setNextId(prev => prev + 1)
  }

  const removePointAnimation = (id: number) => {
    setAnimations(prev => prev.filter(animation => animation.id !== id))
  }
  const handleRemoveBox = (val: BoxToRemove) => {
    const boxesToRemove = findBoxes(val.x, val.y, val.level)

    if (boxesToRemove.length > 0) {
      setCurrentField({ ...currentField })
      onBoxesRemoved(boxesToRemove)
    }

    addPointAnimation(boxesToRemove.length, val.e.clientX, val.e.clientY)
  }

  const latestExplosions = animations.slice(Math.max(animations.length - 5, 0))

  return (
    <div
      ref={boardRef}
      className={styles.field}
      style={{ '--cell-size': `${cellSize}px` } as React.CSSProperties}
    >
      {cover && <img src={cover} alt="" className={styles.cover} />}
      {isEmpty ? (
        <div className={styles.done}>
          <div className={styles.timer}>
            <Timer initialSeconds={3600} />
          </div>
          <button onClick={onNext}>Play next channel</button>
        </div>
      ) : (
        <div className={styles.levels}>
          {levels.map(level => (
            <div key={level} className={styles.level}>
              {Object.keys(field)
                .filter(key => parseInt(key.split('-')[2]) === level)
                .map(positionKey => {
                  const boxes = field[positionKey]
                  return boxes.map(box => (
                    <BoxItem
                      key={box.id}
                      box={box}
                      positionKey={positionKey}
                      cellSize={cellSize}
                      level={level}
                      onRemove={handleRemoveBox}
                    />
                  ))
                })}
            </div>
          ))}
        </div>
      )}

      {animations.map(animation => (
        <PointAnimation
          key={animation.id}
          id={animation.id}
          count={animation.count}
          x={animation.x}
          y={animation.y}
          onRemove={removePointAnimation}
        />
      ))}

      {latestExplosions.map(explosion => (
        <BoxExplosion
          key={explosion.id}
          id={explosion.id}
          x={explosion.x}
          y={explosion.y}
          onRemove={removePointAnimation}
        />
      ))}
    </div>
  )
}
