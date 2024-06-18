import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ChannelLayout from '@/components/layout/ChannelLayout/ChannelLayout'
import { TelegramUser } from '@/data/telegram'
import { Channel } from '@/features/channel/types'
import { useGameStore } from '@/features/game/gameStore'
// TODO: Mock: Replace with real data
import { channels } from '@/mocks/channels'
import { tg } from '@/utils/telegram'

const ChannelItem = dynamic(() => import('@/features/channel/ChannelItem/ChannelItem'), {
  ssr: false,
})

const PlayerActions = dynamic(() => import('@/components/PlayerActions/PlayerActions'), {
  ssr: false,
})

function getData(id: Channel['id']): Channel | null {
  const currentChannel = channels.find(channel => channel.id === id)
  return currentChannel || null
}

export default function ChannelPage() {
  const router = useRouter()
  const { initializeBalance } = useGameStore()

  const {
    query: { channel: channelId },
  } = router

  const channelData = getData(channelId as Channel['id'])

  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    setUser(tg({ router, backButton: '/channels' }))
  }, [router])

  useEffect(() => {
    initializeBalance()
  }, [initializeBalance])

  const handleBack = () => {
    // TODO: Use Telegram.WebApp.BackButton
    router.push('/channels')
  }

  const handleNextChannel = () => {
    router.push(`/channels/${channelData?.nextChannelId}`)
  }

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ChannelLayout nav={<PlayerActions />}>
        {channelData ? (
          <ChannelItem
            key={channelData.id}
            channel={channelData}
            damage={3}
            onBack={handleBack}
            onNext={handleNextChannel}
          />
        ) : (
          <div>Channel not found</div>
        )}
      </ChannelLayout>
    </>
  )
}
