import { FC, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './PointAnimation.module.scss'

type Props = {
  x: number
  y: number
  id: number
  count: number
  onRemove: (id: number) => void
}

export const PointAnimation: FC<Props> = ({ id, x, y, count, onRemove }) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleAnimationEnd = () => {
      const element = elementRef.current
      if (element) {
        element.style.visibility = 'hidden'
      }
      setTimeout(() => onRemove(id), 0)
    }

    const element = elementRef.current
    if (element) {
      element.addEventListener('animationend', handleAnimationEnd)
    }

    return () => {
      if (element) {
        element.removeEventListener('animationend', handleAnimationEnd)
      }
    }
  }, [id, onRemove])

  return createPortal(
    <div
      ref={elementRef}
      className={styles.pointAnimation}
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      {count}
    </div>,
    document.body,
  )
}
