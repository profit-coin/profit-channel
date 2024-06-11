import { FC } from 'react'
import cn from 'classnames'
import Box from '@/components/common/Box/Box'
import Heading from '@/components/common/Heading/Heading'
import styles from './Boosters.module.scss'

type Props = {}

function Boosters() {
  return (
    <div className={styles.boosters}>
      <Box mb="6">
        <Heading size="h2">Free boosters</Heading>
      </Box>

      <div className={cn(styles.row, styles.half)}>
        <button className={cn(styles.booster, 'ghostButton')}>
          <div className={styles.picture}></div>
          <div className={styles.text}>
            <div className={styles.title}>Turbo</div>
            <div className={styles.description}>2 / 3 boosts</div>
          </div>
        </button>

        <button className={cn(styles.booster, 'ghostButton')}>
          <div className={styles.picture}></div>
          <div className={styles.text}>
            <div className={styles.title}>Recharge</div>
            <div className={styles.description}>1 / 3 boosts</div>
          </div>
        </button>
      </div>

      <Box mb="6" mt="6">
        <Heading size="h2">Upgrades</Heading>
      </Box>

      <div className={styles.row}>
        <button className={cn(styles.booster, 'ghostButton')}>
          <div className={styles.picture}></div>
          <div className={styles.text}>
            <div className={styles.title}>AutoBot</div>
            <div className={styles.description}>2 / 3 available | 2 hours left</div>
          </div>
        </button>
      </div>

      <div className={styles.row}>
        <button className={cn(styles.booster, 'ghostButton')}>
          <div className={styles.picture}></div>
          <div className={styles.text}>
            <div className={styles.title}>Damage</div>
            <div className={styles.description}>2000 | LV1</div>
          </div>
        </button>
      </div>

      <div className={styles.row}>
        <button className={cn(styles.booster, 'ghostButton')}>
          <div className={styles.picture}></div>
          <div className={styles.text}>
            <div className={styles.title}>Recharging Speed</div>
            <div className={styles.description}>2000 | LV1</div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Boosters
