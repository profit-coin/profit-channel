import dynamic from 'next/dynamic'
import Head from 'next/head'
import ChannelLayout from '@/components/layout/ChannelLayout/ChannelLayout'
import { Channel } from '@/features/channel/types'
// TODO: Mock: Replace with real data
import { channels } from '@/mocks/channels'

const ChannelsBoard = dynamic(() => import('@/features/channel/ChannelsBoard/ChannelsBoard'), {
  ssr: false,
})
const PlayerStat = dynamic(() => import('@/components/PlayerStat/PlayerStat'), {
  ssr: false,
})
const PlayerActions = dynamic(() => import('@/components/PlayerActions/PlayerActions'), {
  ssr: false,
})

function getData(): Channel[] {
  return channels
}

export default function ChannelsPage() {
  const channelsList = getData()

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ChannelLayout nav={<PlayerActions />}>
        <PlayerStat />

        <ChannelsBoard channels={channelsList} />
      </ChannelLayout>
    </>
  )
}
