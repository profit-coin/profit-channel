import { FC } from 'react'
import { ChannelItem } from '../ChannelItem/ChannelItem'
import { Channel } from '../types'
import styles from './ChannelsList.module.scss'

type Props = {
  channels: Channel[]
  onEarn: (coins: number) => void
}

export const ChannelsList: FC<Props> = ({ channels, onEarn }) => {
  const damage = 3

  return (
    <div className={styles.channels}>
      <div className={styles.list}>
        {channels.map(channel => (
          <div className={styles.item} key={channel.id}>
            <ChannelItem
              channel={channel}
              damage={damage}
              onNext={() => {}}
              onBack={() => {}}
              onEarn={onEarn}
            />
          </div>
        ))}
      </div>

      <p>
        <b>damage: 3</b>
      </p>
    </div>
  )
}
