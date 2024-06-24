/* eslint-disable @next/next/no-img-element */
import cn from 'classnames'
import Box from '@/components/common/Box/Box'
import Heading from '@/components/common/Heading/Heading'
import styles from './ChannelsSuggestedList.module.scss'
import { PublicChannel, useAddChannelToFavoritesMutation } from '@/data/channels'
import ChannelAvatar from '../ChannelItem/ChannelAvatar/ChannelAvatar'
import Icon from '@/components/common/Icon/Icon'

interface ChannelsBoardProps {
  channels: PublicChannel[]
}

function ChannelsSuggestedList({ channels }: ChannelsBoardProps) {
  const addChannelToFavoritesMutation = useAddChannelToFavoritesMutation();

  const handleAddToFavorites = async (channelTelegramId: number) => {
    try {
      await addChannelToFavoritesMutation.mutateAsync({ channelTelegramId });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.board}>
      <Box mb="4">
        <Heading size="h1">Find new channels</Heading>
      </Box>

      <Box mb="4">
        <input className={styles.searchField} placeholder="Start input channel name..." />
      </Box>

      <ul className={styles.list}>
        {channels.map(channel => (
          <li className={styles.item} key={channel.telegramId}>
            <button
              className={cn('ghostButton', styles.chanel)}
              onClick={() => { handleAddToFavorites(channel.telegramId); }}
            >
              <div className={styles.view}>
                <ChannelAvatar channel={channel} />
                {/* channel.is_premium && <div className={styles.crown}>👑</div> */}
              </div>

              <div className={styles.info}>
                <h3 className={styles.name}>{channel.title}</h3>
                <p className={styles.description}>{channel.description}</p>
                <p className={styles.members}>
                  {channel.members?.toLocaleString()} subscribers
                </p>
              </div>

              <Icon iconName="plus" size="medium" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChannelsSuggestedList
