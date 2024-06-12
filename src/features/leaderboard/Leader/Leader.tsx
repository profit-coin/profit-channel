import cn from 'classnames'
import Card from '@/components/Card/Card'
import Title from '@/components/Title/Title'
import styles from './Leader.module.scss'

type Props = {
  name: string
  lvl: number
  money: number
}

function Leader({ name, lvl, money }: Props) {
  return (
    <div className={styles.row}>
      <Card as="button" className={cn(styles.booster, 'ghostButton')}>
        <div className={styles.picture}></div>
        <div className={styles.text}>
          <Title className={styles.title}>{name}</Title>
          <div className={styles.description}>
            {money} | {lvl} lvl
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Leader
