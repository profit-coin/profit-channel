import cn from 'classnames'
import Coin from '@/components/Coin/Coin'
import styles from './Balance.module.scss'
import { useGameStore } from '@/features/game/gameStore';

interface BalanceProps {
  balance?: number;
  isLoading?: boolean;
  isTransformed?: boolean;
}

function Balance ({ balance, isTransformed, isLoading }: BalanceProps) {
  const { accumulatedPoints } = useGameStore()

  if (balance === undefined) {
    return null;
  }

  const actualBalance = balance + accumulatedPoints

  return (
    <div className={cn(styles.balance, { [styles.transformed]: isTransformed })}>
      <div className={styles.board}>
        <Coin size={40} />
        <div className={styles.sum}>
          {isLoading ? '....' : actualBalance}
        </div>
      </div>
    </div>
  )
}
export default Balance;
