import { useState } from 'react'
import { Balance } from '../../../components/Balance/Balance'
import { channels } from '../../../mocks/channels'
import { ChannelItem } from '../../channel/ChannelItem/ChannelItem'
import ChannelsBoard from '../../channel/ChannelsBoard/ChannelsBoard'
import { Channel } from '../../channel/types'

function GameView() {
  const channelsList = channels as Channel[]

  const [points, setPoints] = useState<number>(34034)
  const [activeChannelId, setActiveChanelId] = useState<number | null>(null)

  const currentChannel = channelsList.find(channel => channel.id === activeChannelId)

  const handleNextChannel = () => {
    const nextChannelIndex = channelsList.findIndex(channel => channel.id === activeChannelId) + 1
    const nextChannel = channelsList[nextChannelIndex]
    nextChannel ? setActiveChanelId(nextChannel.id) : setActiveChanelId(null)
  }

  return (
    <>
      <Balance balance={points} />

      {currentChannel ? (
        <ChannelItem
          key={currentChannel.id}
          channel={currentChannel}
          damage={3}
          onBack={() => setActiveChanelId(null)}
          onNext={handleNextChannel}
          onEarn={val => setPoints(prev => prev + val)}
        />
      ) : (
        <ChannelsBoard channels={channelsList} onSelect={setActiveChanelId} onAdd={() => {}} />
      )}
    </>
  )
}

export default GameView
