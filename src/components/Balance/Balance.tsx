import Coin from '@/components/Coin/Coin'
import styles from './Balance.module.scss'

interface BalanceProps {
  balance?: number;
}

function Balance ({ balance: gameBalance }: BalanceProps) {
  return (
    <div className={styles.balance}>
      <Coin size={40} />

      <div className={styles.sum}>
        {gameBalance?.toLocaleString('en-En', { maximumFractionDigits: 3 })}
      </div>
    </div>
  )
}
export default Balance
