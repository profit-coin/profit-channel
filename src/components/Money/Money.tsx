import cn from 'classnames'
import Coin from '@/components/Coin/Coin'
import styles from './Money.module.scss'

type Props = {
  sum: number
  isReverted?: boolean
  isAccent?: boolean
}

function Money({ sum, isReverted, isAccent }: Props) {
  return (
    <div
      className={cn(styles.money, { [styles.reverted]: isReverted }, { [styles.accent]: isAccent })}
    >
      <Coin size={20} />

      <span className={styles.sum}>{sum.toLocaleString()}</span>
    </div>
  )
}
export default Money
