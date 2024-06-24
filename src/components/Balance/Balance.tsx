import cn from 'classnames'
import Coin from '@/components/Coin/Coin'
import styles from './Balance.module.scss'

interface BalanceProps {
  balance?: number;
  isTransformed?: boolean;
}

function Balance ({ balance: gameBalance }: BalanceProps) {
  return (
    <div className={cn(styles.balance, { [styles.transformed]: isTransformed })}>
      <div className={styles.board}>
        {/* <Coin size={40} /> */}

        <div className={styles.sum}>
          {gameBalance?.toLocaleString('en-En', { maximumFractionDigits: 3 })}
        </div>
      </div>
    </div>
  )
}
export default Balance;