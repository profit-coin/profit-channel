import Card from '@/components/Card/Card'
import Title from '@/components/Title/Title'
import { useGameStore } from '@/features/game/gameStore'
import styles from './PlayerStat.module.scss'

function PlayerStat() {
  const { playerLevel, levelProgress, levelTotal } = useGameStore()

  return (
    <Card className={styles.stat}>
      <div className={styles.progress}>
        <Title className={styles.name}>7x7</Title>
        <div className={styles.level}>Level {playerLevel}</div>
      </div>
      <div className={styles.clan}>
        <Title className={styles.name}>MegaClan</Title>
        <div className={styles.level}>Level 7</div>
      </div>
    </Card>
  )
}
export default PlayerStat
