/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Card from '@/components/Card/Card'
import Title from '@/components/Title/Title'
import Box from '@/components/common/Box/Box'
import Heading from '@/components/common/Heading/Heading'
import { Campaign } from '@/features/earn/types'
import styles from './EarnList.module.scss'

type Props = {
  campaigns: Campaign[]
}

function EarnList({ campaigns }: Props) {
  return (
    <div className={styles.earnList}>
      <Box mb="6">
        <Heading size="h2">Campaigns</Heading>
      </Box>

      {campaigns.map(campaign => (
        <Link href={`/earn/${campaign.id}`} className={styles.campaign} key={campaign.id}>
          <Card className={styles.card}>
            <div className={styles.picture}>
              <img src={campaign.cover} alt="" className={styles.cover} />
            </div>
            <div className={styles.text}>
              <Title className={styles.name}>{campaign.name}</Title>
              <div className={styles.description}>{campaign.description}</div>
              <div className={styles.stat}>STAT</div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default EarnList
