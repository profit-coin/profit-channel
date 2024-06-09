/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Box from '@/components/common/Box/Box'
import Heading from '@/components/common/Heading/Heading'
import { Channel } from '../types'
import styles from './ChannelsSuggestedList.module.scss'

interface ChannelsBoardProps {
  channels: Channel[]
  onSelect: (ids: Channel['id'][]) => void
}

function ChannelsSuggestedList({ channels, onSelect }: ChannelsBoardProps) {
  const [selectedChannelsIds, setSelectedChannelsIds] = useState<Channel['id'][]>([])

  const handleSelect = (id: Channel['id']) => {
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
                <img src={channel.cover} alt="" className={styles.cover} />
                {channel.isPremium && <div className={styles.crown}>👑</div>}
              </div>

              <div className={styles.info}>
                <h3 className={styles.name}>{channel.name}</h3>
                <p className={styles.description}>{channel.description}</p>
                <p className={styles.subscribers}>
                  {channel.subscribers?.toLocaleString()} subscribers
                </p>
              </div>
              {selectedChannelsIds.includes(channel.id) && <div className={styles.check}>☑️</div>}
            </button>
          </li>
        ))}
      </ul>

      <p>
        <button onClick={() => onSelect(selectedChannelsIds)}>Add selected channels</button>
      </p>

      <p>
        {/* TODO: Remove it */}
        <Link href="/channels">Back</Link>
      </p>
    </div>
  )
}

export default ChannelsSuggestedList
