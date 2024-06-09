import cn from 'classnames'
import styles from './PlayerActions.module.scss'

function PlayerActions() {
  return (
    <div className={styles.actions}>
      <button className={cn('ghostButton', styles.action)}>
        <div className={styles.icon}>🚀</div>
        <div className={styles.label}>Boosters</div>
      </button>
      <button className={cn('ghostButton', styles.action)}>
        <div className={styles.icon}>📊</div>
        <div className={styles.label}>Stats</div>
      </button>
      <button className={cn('ghostButton', styles.action)}>
        <div className={styles.icon}>💰</div>
        <div className={styles.label}>Earn</div>
      </button>
      <button className={cn('ghostButton', styles.action)}>
        <div className={styles.icon}>👥</div>
        <div className={styles.label}>Invite</div>
      </button>
    </div>
  )
}
export default PlayerActions
