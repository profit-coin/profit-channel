import { PropsWithChildren } from 'react'
import cn from 'classnames'
import Balance from '../Balance/Balance'
import styles from './Hero.module.scss'

interface Props {
  title?: string
  showBalance?: boolean
}

function Hero({ title, showBalance, children }: PropsWithChildren<Props>) {
  return (
    <div className={cn(styles.hero)}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {showBalance && <Balance />}
      {children}
    </div>
  )
}

export default Hero
