import Card from '@/components/Card/Card'
import Title from '@/components/Title/Title'
import styles from './LeadersStat.module.scss'

function LeadersStat() {
  return (
    <Card className={styles.stat}>
      <div className={styles.total_users}>
        <Title className={styles.name}>Total Users</Title>
        <div className={styles.level}>1,292,212</div>
      </div>
      <div className={styles.place}>
        <Title className={styles.name}>Your Place</Title>
        <div className={styles.level}>2</div>
      </div>
    </Card>
  )
}
export default LeadersStat
