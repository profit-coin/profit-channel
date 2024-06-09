import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ChannelLayout from '@/features/channel/ChannelLayout/ChannelLayout'
import { Channel } from '@/features/channel/types'
// TODO: Mock: Replace with real data
import { channels } from '../../mocks/channels'

const ChannelItem = dynamic(() => import('@/features/channel/ChannelItem/ChannelItem'), {
  ssr: false,
})

function getData(id: Channel['id']): Channel | null {
  const currentChannel = channels.find(channel => channel.id === id)
  return currentChannel || null
}

export default function ChannelPage() {
  const router = useRouter()

  const {
    query: { channel: channelId },
  } = router

  const channelData = getData(channelId as Channel['id'])

  const handleBack = () => {
    // TODO: Use Telegram.WebApp.BackButton
    window.history.back()
  }

  const handleNextChannel = () => {
    router.push(`/${channelData?.nextChannelId}`)
  }

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ChannelLayout>
        {channelData ? (
          <ChannelItem
            key={channelData.id}
            channel={channelData}
            damage={3}
            onBack={handleBack}
            onNext={handleNextChannel}
            onEarn={val => {}}
          />
        ) : (
          <div>Channel not found</div>
        )}
      </ChannelLayout>
    </>
  )
}
