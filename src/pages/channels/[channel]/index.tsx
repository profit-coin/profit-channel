import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ChannelLayout from '@/components/layout/ChannelLayout/ChannelLayout'
import { TelegramUser } from '@/data/telegram'
import { useGameById } from '@/hooks/useApi'
// TODO: Mock: Replace with real data
import { tg } from '@/utils/telegram'

const ChannelItem = dynamic(() => import('@/features/channel/ChannelItem/ChannelItem'), {
  ssr: false,
})

const PlayerActions = dynamic(() => import('@/components/PlayerActions/PlayerActions'), {
  ssr: false,
})

export default function ChannelPage() {
  const router = useRouter()

  const {
    query: { channel: channelId },
  } = router

  const {
    data: gameData,
    error: gameError,
    isLoading: isGameLoading,
  } = useGameById(channelId as string)

  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    setUser(tg({ router, backButton: '/channels' }))
  }, [router])

  const handleBack = () => {
    // TODO: Use Telegram.WebApp.BackButton
    router.push('/channels')
  }

  const handleNextChannel = () => {
    router.push(`/channels/${gameData?.next_channel_id}`)
  }

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ChannelLayout nav={<PlayerActions />}>
        {gameData ? (
          <ChannelItem
            key={gameData.id}
            channelGame={gameData}
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
