import { FC } from 'react'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import Box from '@/components/common/Box/Box'
import Heading from '@/components/common/Heading/Heading'
import styles from './LeaderBoard.module.scss'

const PlayerStat = dynamic(() => import('@/components/PlayerStat/PlayerStat'), {
  ssr: false,
})

type Props = {}

function LeaderBoard() {
  return (
    <div className={styles.boosters}>
      <Box mb="6">
        <Heading size="h2">Free boosters</Heading>
      </Box>

      <PlayerStat />

      <div className={styles.leaders}>
        <div className={styles.row}>
          <button className={cn(styles.booster, 'ghostButton')}>
            <div className={styles.picture}></div>
            <div className={styles.text}>
              <div className={styles.title}>itechmeat</div>
              <div className={styles.description}>2000 | LV1</div>
            </div>
          </button>
        </div>

        <div className={styles.row}>
          <button className={cn(styles.booster, 'ghostButton')}>
            <div className={styles.picture}></div>
            <div className={styles.text}>
              <div className={styles.title}>andr_ewtf</div>
              <div className={styles.description}>2000 | LV1</div>
            </div>
          </button>
        </div>

        <div className={styles.row}>
          <button className={cn(styles.booster, 'ghostButton')}>
            <div className={styles.picture}></div>
            <div className={styles.text}>
              <div className={styles.title}>someone_was_here</div>
              <div className={styles.description}>2000 | LV1</div>
            </div>
          </button>
        </div>

        <div className={styles.row}>
          <button className={cn(styles.booster, 'ghostButton')}>
            <div className={styles.picture}></div>
            <div className={styles.text}>
              <div className={styles.title}>itechmeat</div>
              <div className={styles.description}>2000 | LV1</div>
            </div>
          </button>
        </div>

        <div className={styles.row}>
          <button className={cn(styles.booster, 'ghostButton')}>
            <div className={styles.picture}></div>
            <div className={styles.text}>
              <div className={styles.title}>andr_ewtf</div>
              <div className={styles.description}>2000 | LV1</div>
            </div>
          </button>
        </div>

        <div className={styles.row}>
          <button className={cn(styles.booster, 'ghostButton')}>
            <div className={styles.picture}></div>
            <div className={styles.text}>
              <div className={styles.title}>someone_was_here</div>
              <div className={styles.description}>2000 | LV1</div>
            </div>
          </button>
        </div>

        <div className={styles.row}>
          <button className={cn(styles.booster, 'ghostButton')}>
            <div className={styles.picture}></div>
            <div className={styles.text}>
              <div className={styles.title}>itechmeat</div>
              <div className={styles.description}>2000 | LV1</div>
            </div>
          </button>
        </div>

        <div className={styles.row}>
          <button className={cn(styles.booster, 'ghostButton')}>
            <div className={styles.picture}></div>
            <div className={styles.text}>
              <div className={styles.title}>andr_ewtf</div>
              <div className={styles.description}>2000 | LV1</div>
            </div>
          </button>
        </div>

        <div className={styles.row}>
          <button className={cn(styles.booster, 'ghostButton')}>
            <div className={styles.picture}></div>
            <div className={styles.text}>
              <div className={styles.title}>someone_was_here</div>
              <div className={styles.description}>2000 | LV1</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard
