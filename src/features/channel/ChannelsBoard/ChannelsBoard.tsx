/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { Channel } from '../types'
import styles from './ChannelsBoard.module.scss'

type Props = {
  channels: Channel[]
  onSelect: (id: number) => void
  onAdd: () => void
}

const CHANNELS_BOARD_SIZE = 20

export const ChannelsBoard: FC<Props> = ({ channels, onSelect, onAdd }) => {
  const emptyChannels = Array.from({ length: CHANNELS_BOARD_SIZE - channels.length }, (_, i) => i)

  return (
    <div className={styles.board}>
      <h2>Your channels</h2>
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
