// import Coin from '@/components/Coin/Coin'
import cn from 'classnames'
import { useGameStore } from '@/features/game/gameStore'
import styles from './Balance.module.scss'

type Props = {
  isTransformed?: boolean
}

function Balance({ isTransformed }: Props) {
  const { gameBalance } = useGameStore()

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
export default Balance
