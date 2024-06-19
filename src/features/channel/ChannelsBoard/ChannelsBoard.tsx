/* eslint-disable @next/next/no-img-element */
import { PlusIcon } from '@radix-ui/react-icons'
import cn from 'classnames'
import Link from 'next/link'
import Box from '@/components/common/Box/Box'
import Heading from '@/components/common/Heading/Heading'
import { IChannelItem } from '../types'
import styles from './ChannelsBoard.module.scss'

type Props = {
  channels: IChannelItem[]
}

const CHANNELS_BOARD_SIZE = 20

function ChannelsBoard({ channels }: Props) {
  const emptyChannels = Array.from({ length: CHANNELS_BOARD_SIZE - channels.length }, (_, i) => i)

  if (!channels) return null

  return (
    <div className={styles.board}>
      <Box mb="4">
        <Heading size="h1">Your favorite channels</Heading>
      </Box>

      <ul className={styles.list}>
        {channels.map(channel => (
          <li className={styles.item} key={channel.id}>
            <Link className={cn('ghostButton', styles.chanel)} href={`/channels/${channel.id}`}>
              <img src={channel.icon_url} alt="" className={styles.cover} />
              {channel.is_premium && <div className={styles.crown}>👑</div>}
            </Link>
          </li>
        ))}
        {emptyChannels.map(item => (
          <li className={styles.item} key={item}>
            <Link className={cn('ghostButton', styles.empty)} href="/channels/add">
              <div>
                <PlusIcon width={20} height={20} />
                <div className={styles.addText}>
                  Add
                  <br />
                  channel
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChannelsBoard
