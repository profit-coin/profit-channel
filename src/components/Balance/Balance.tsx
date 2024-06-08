/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import styles from './Balance.module.scss'

type Props = {
  balance: number
}

export const Balance: FC<Props> = ({ balance }) => {
  return (
    <div className={styles.balance}>
      <img src="/images/coin.png" className={styles.coin} alt="" />

      <div className={styles.sum}>
        {balance.toLocaleString('en-En', { maximumFractionDigits: 3 })}
      </div>
    </div>
  )
}
