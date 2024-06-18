/* eslint-disable @next/next/no-img-element */
import cn from 'classnames'
import Card from '@/components/Card/Card'
import Title from '@/components/Title/Title'
import styles from './Leader.module.scss'

type Props = {
  place: number
  name: string
  lvl: number
  money: number
}

function Leader({ name, lvl, money, place }: Props) {
  return (
    <div className={styles.row}>
      <Card as="button" className={cn(styles.booster, 'ghostButton')}>
        {place > 5 ? (
          <div className={styles.place}>{place}</div>
        ) : (
          <div className={cn(styles.place, styles.top_place)}>
            <img
              src="https://static-00.iconduck.com/assets.00/cup-icon-2048x2048-zjifyt9g.png"
              alt="cup"
            ></img>
          </div>
        )}
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
