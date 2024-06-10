import { useGameStore } from '@/features/game/gameStore'
import styles from './PlayerStat.module.scss'

function PlayerStat() {
  const { playerLevel, levelProgress, levelTotal } = useGameStore()

  return (
    <div className={styles.stat}>
      <div className={styles.progress}>
        <div className={styles.name}>7x7</div>
        <div className={styles.level}>Level {playerLevel}</div>
      </div>
      <div className={styles.clan}>
        <div className={styles.name}>MegaClan</div>
        <div className={styles.level}>Level 7</div>
      </div>
    </div>
  )
}
export default PlayerStat
