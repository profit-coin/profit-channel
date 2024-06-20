/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import cn from 'classnames'
import Box from '@/components/common/Box/Box'
import Button from '@/components/common/Button/Button'
import Heading from '@/components/common/Heading/Heading'
import { IChannelItem } from '../types'
import styles from './ChannelsSuggestedList.module.scss'

interface ChannelsBoardProps {
  channels: IChannelItem[]
  onSelect: (ids: IChannelItem['id'][]) => void
}

function ChannelsSuggestedList({ channels, onSelect }: ChannelsBoardProps) {
  const [selectedChannelsIds, setSelectedChannelsIds] = useState<IChannelItem['id'][]>([])

  const handleSelect = (id: IChannelItem['id']) => {
    if (selectedChannelsIds.includes(id)) {
      setSelectedChannelsIds(selectedChannelsIds.filter(selectedId => selectedId !== id))
    } else {
      setSelectedChannelsIds([...selectedChannelsIds, id])
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
          <li className={styles.item} key={channel.id}>
            <button
              className={cn('ghostButton', styles.chanel, {
                [styles.selected]: selectedChannelsIds.includes(channel.id),
              })}
              onClick={() => handleSelect(channel.id)}
            >
              <div className={styles.view}>
                <img src={channel.icon_url} alt="" className={styles.cover} />
                {channel.is_premium && <div className={styles.crown}>👑</div>}
              </div>

              <div className={styles.info}>
                <h3 className={styles.name}>{channel.name}</h3>
                <p className={styles.description}>{channel.description}</p>
                <p className={styles.subscribers}>
                  {channel.subscribers?.toLocaleString()} subscribers
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <p>
        <Button variant="success" onClick={() => onSelect(selectedChannelsIds)}>
          Add selected channels
        </Button>
      </p>
    </div>
  )
}

export default ChannelsSuggestedList
