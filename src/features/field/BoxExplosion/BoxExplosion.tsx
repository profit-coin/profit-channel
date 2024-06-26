/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './BoxExplosion.module.scss'

type Props = {
  x: number
  y: number
  id: number
  onRemove: (id: number) => void
}

function BoxExplosion({ id, x, y, onRemove }: Props) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id)
    }, 800)

    return () => clearTimeout(timer)
  }, [id, onRemove])

  return createPortal(
    <div ref={elementRef} className={styles.explosion} style={{ left: `${x}px`, top: `${y}px` }}>
      <img key={Math.random()} src="/images/explosion.gif?" alt="" className={styles.image} />
    </div>,
    document.body,
  )
}

export default BoxExplosion
