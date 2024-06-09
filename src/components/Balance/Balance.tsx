/* eslint-disable @next/next/no-img-element */
import { useGameStore } from '@/features/game/gameStore'
import styles from './Balance.module.scss'

function Balance() {
  const { gameBalance } = useGameStore()

  return (
    <div className={styles.balance}>
      <img src="/images/coin.png" className={styles.coin} alt="" />

      <div className={styles.sum}>
        {gameBalance.toLocaleString('en-En', { maximumFractionDigits: 3 })}
      </div>
    </div>
  )
}
export default Balance
