import { FC } from 'react'
import cn from 'classnames'
import Card from '@/components/Card/Card'
import Title from '@/components/Title/Title'
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
        <Card
          as="button"
          className={cn(styles.booster, 'ghostButton')}
          onClick={() => console.log('🚀 Booster: Turbo')}
        >
          <div className={styles.picture}></div>
          <div className={styles.text}>
            <Title className={styles.title}>Turbo</Title>
            <div className={styles.description}>2 / 3 boosts</div>
          </div>
        </Card>

        <Card
          as="button"
          className={cn(styles.booster, 'ghostButton')}
          onClick={() => console.log('🚀 Booster: Turbo')}
        >
          <div className={styles.picture}></div>
          <div className={styles.text}>
            <Title className={styles.title}>Recharge</Title>
            <div className={styles.description}>1 / 3 boosts</div>
          </div>
        </Card>
      </div>

      <Box mb="6" mt="6">
        <Heading size="h2">Upgrades</Heading>
      </Box>

      <div className={styles.row}>
        <Card
          as="button"
          className={cn(styles.booster, 'ghostButton')}
          onClick={() => console.log('🚀 Booster: AutoBot')}
        >
          <div className={styles.picture}></div>
          <div className={styles.text}>
            <Title className={styles.title}>AutoBot</Title>
            <div className={styles.description}>2 / 3 available | 2 hours left</div>
          </div>
        </Card>
      </div>

      <div className={styles.row}>
        <Card
          as="button"
          className={cn(styles.booster, 'ghostButton')}
          onClick={() => console.log('🚀 Booster: Damage')}
        >
          <div className={styles.picture}></div>
          <div className={styles.text}>
            <Title className={styles.title}>Damage</Title>
            <div className={styles.description}>2000 | LV1</div>
          </div>
        </Card>
      </div>

      <div className={styles.row}>
        <Card
          as="button"
          className={cn(styles.booster, 'ghostButton')}
          onClick={() => console.log('🚀 Booster: Recharging Speed')}
        >
          <div className={styles.picture}></div>
          <div className={styles.text}>
            <Title className={styles.title}>Recharging Speed</Title>
            <div className={styles.description}>2000 | LV1</div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Boosters
