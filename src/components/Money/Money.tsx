import cn from 'classnames'
import Coin from '@/components/Coin/Coin'
import styles from './Money.module.scss'

type Props = {
  sum: number
  mastered?: number
  hasPlus?: boolean
  isReverted?: boolean
  isAccent?: boolean
}

function Money({ sum, mastered, hasPlus, isReverted, isAccent }: Props) {
  return (
    <div
      className={cn(styles.money, { [styles.reverted]: isReverted }, { [styles.accent]: isAccent })}
    >
      <Coin size={20} />

      {hasPlus && <span className={styles.plus}>+</span>}
      {mastered !== undefined && (
        <span className={styles.mastered}>{mastered.toLocaleString()} / </span>
      )}
      <span className={styles.sum}>{sum.toLocaleString()}</span>
    </div>
  )
}
export default Money
