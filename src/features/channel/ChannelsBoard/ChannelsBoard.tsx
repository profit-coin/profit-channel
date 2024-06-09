/* eslint-disable @next/next/no-img-element */
import cn from 'classnames'
import Link from 'next/link'
import Box from '@/components/common/Box/Box'
import Heading from '@/components/common/Heading/Heading'
import { Channel } from '../types'
import styles from './ChannelsBoard.module.scss'

interface ChannelsBoardProps {
  channels: Channel[]
}

const CHANNELS_BOARD_SIZE = 20

function ChannelsBoard({ channels }: ChannelsBoardProps) {
  const emptyChannels = Array.from({ length: CHANNELS_BOARD_SIZE - channels.length }, (_, i) => i)

  return (
    <div className={styles.board}>
      <Box mb="4">
        <Heading size="h1">Your favorite channels</Heading>
      </Box>

      <ul className={styles.list}>
        {channels.map(channel => (
          <li className={styles.item} key={channel.id}>
            <Link className={cn('ghostButton', styles.chanel)} href={`/channels/${channel.id}`}>
              <img src={channel.cover} alt="" className={styles.cover} />
              {channel.isPremium && <div className={styles.crown}>👑</div>}
            </Link>
          </li>
        ))}
        {emptyChannels.map(item => (
          <li className={styles.item} key={item}>
            <Link className={cn('ghostButton', styles.empty)} href="/channels/add">
              Add channel
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChannelsBoard
