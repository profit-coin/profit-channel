import ChannelItem from '../ChannelItem/ChannelItem'
import { IGameItem } from '../types'
import styles from './ChannelsList.module.scss'

type Props = {
  channels: IGameItem[]
  onEarn: (coins: number) => void
}

function ChannelsList({ channels, onEarn }: Props) {
  if (!channels) {
    return null;
  }
  
  return (
    <div className={styles.channels}>
      <div className={styles.list}>
        {channels.map(channel => (
          <div className={styles.item} key={channel.id}>
            <ChannelItem channel={channel} onNext={() => {}} onBack={() => {}} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChannelsList
