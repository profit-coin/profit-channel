/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Card from '@/components/Card/Card'
import Coin from '@/components/Coin/Coin'
import Money from '@/components/Money/Money'
import Title from '@/components/Title/Title'
import { Campaign, Task } from '@/features/earn/types'
import styles from './EarnBoard.module.scss'

type Props = {
  campaign: Campaign
  tasks: Task[]
}

function EarnBoard({ campaign, tasks }: Props) {
  return (
    <div className={styles.campaign}>
      <Card className={styles.card}>
        <div className={styles.coinPicture}>
          <Coin size={60} />
        </div>
        <div className={styles.text}>
          <Title className={styles.name}>Earn 100K Coins</Title>
          <div className={styles.description}>
            We have made coin pool for all users to earn for completing tasks
          </div>
          <div className={styles.stat}>
            <Money sum={100000} mastered={0} isAccent />
          </div>
        </div>
      </Card>

      <div className={styles.tasks}>
        <Card className={styles.card}>
          <div className={styles.list}>
            {tasks.map(task => (
              <div className={styles.task} key={task.id}>
                <div className={styles.picture}></div>
                <div className={styles.text}>
                  <div className={styles.name}>{task.name}</div>
                  <div className={styles.money}>
                    <Money sum={task.coins} hasPlus />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default EarnBoard
