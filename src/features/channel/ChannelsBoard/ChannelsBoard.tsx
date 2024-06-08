/* eslint-disable @next/next/no-img-element */
import Box from '@/components/common/Box/Box'
import Heading from '@/components/common/Heading/Heading'
import { Channel } from '../types'
import styles from './ChannelsBoard.module.scss'

interface ChannelsBoardProps {
  channels: Channel[]
  onSelect: (id: number) => void
  onAdd: () => void
}

const CHANNELS_BOARD_SIZE = 20

function ChannelsBoard({ channels, onSelect, onAdd }: ChannelsBoardProps) {
  const emptyChannels = Array.from({ length: CHANNELS_BOARD_SIZE - channels.length }, (_, i) => i)

  return (
    <div className={styles.board}>
      <Box mb="4">
        <Heading size="h1">Your channels</Heading>
      </Box>
      <ul className={styles.list}>
        {channels.map(channel => (
          <li className={styles.item} key={channel.id}>
            <button className={styles.chanel} onClick={() => onSelect(channel.id)}>
              <img src={channel.cover} alt="" className={styles.cover} />
              {channel.isPremium && <div className={styles.crown}>👑</div>}
            </button>
          </li>
        ))}
        {emptyChannels.map(item => (
          <li className={styles.item} key={item}>
            <button className={styles.empty} onClick={onAdd}>
              Add channel
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChannelsBoard
