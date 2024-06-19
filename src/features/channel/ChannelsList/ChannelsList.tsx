import ChannelItem from '../ChannelItem/ChannelItem'
import { Channel } from '../types'
import styles from './ChannelsList.module.scss'

type Props = {
  channels: Channel[]
  onEarn: (coins: number) => void
}

function ChannelsList({ channels, onEarn }: Props) {
  return (
    <div className={styles.channels}>
      <div className={styles.list}>
        {channels.map(channel => (
          <div className={styles.item} key={channel.id}>
            <ChannelItem channelGame={channel} onNext={() => {}} onBack={() => {}} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChannelsList
