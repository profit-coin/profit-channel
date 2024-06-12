import cn from 'classnames'
import styles from './LeaderBoard.module.scss'

type Props = {}

function Leader() {
  return (
    <div className={styles.row}>
      <button className={cn(styles.booster, 'ghostButton')}>
        <div className={styles.picture}></div>
        <div className={styles.text}>
          <div className={styles.title}>andr_ewtf</div>
          <div className={styles.description}>2000 | LV1</div>
        </div>
      </button>
    </div>
  )
}

export default Leader
