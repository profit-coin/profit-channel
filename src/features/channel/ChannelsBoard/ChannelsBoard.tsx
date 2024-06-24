/* eslint-disable @next/next/no-img-element */
import { PlusIcon } from '@radix-ui/react-icons'
import cn from 'classnames'
import Link from 'next/link'
import Box from '@/components/common/Box/Box'
import Heading from '@/components/common/Heading/Heading'
import styles from './ChannelsBoard.module.scss'
import { InternalGameChannel } from '@/data/channels'
import ChannelAvatar from '../ChannelItem/ChannelAvatar/ChannelAvatar'
import Loader from '@/components/common/Loader/Loader'

type ChannelsBoardProps = {
  channels: InternalGameChannel[] | undefined;
}

const CHANNELS_BOARD_SIZE = 12

function ChannelsBoard({ channels }: ChannelsBoardProps) {
  if (!channels) {
    return <Loader />
  }

  console.log('channels', channels);

  const emptyChannels = Array.from({ length: CHANNELS_BOARD_SIZE - channels.length }, (_, i) => i)

  return (
    <div className={styles.board}>
      <Box mb="4">
        <Heading size="h1">Your favorite channels</Heading>
      </Box>

      <ul className={styles.list}>
        {channels.map(channel => (
          <li className={styles.item} key={channel.telegramId}>
            <Link className={cn('ghostButton', styles.chanel)} href={`/channels/${channel.telegramId}`}>
              {channel ? <ChannelAvatar channel={channel} /> : null}
              {/* channel.is_premium && <div className={styles.crown}>👑</div> */}
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
