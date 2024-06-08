import { FC, useEffect, useState } from 'react'
import styles from './Timer.module.scss'

type Props = {
  initialSeconds: number
}

export const Timer: FC<Props> = ({ initialSeconds }) => {
  const [time, setTime] = useState(initialSeconds)

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime - 1)
      }, 1000)

      return () => clearInterval(timerId)
    }
  }, [time])

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  return <div className={styles.timer}>{formatTime(time)}</div>
}
