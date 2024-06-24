import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ChannelLayout from '@/components/layout/ChannelLayout/ChannelLayout'
import { useGameById } from '@/hooks/useApi'
import { showTelegramBackButton } from '@/utils/telegram'
import {usePlayerChannel} from '@/data/channels'
import Loader from '@/components/common/Loader/Loader'

const ChannelItem = dynamic(() => import('@/features/channel/ChannelItem/ChannelItem'), {
  ssr: false,
})

const GAME_SETTINGS = {
  damage: 1,
  field_size: 5,
}

export default function ChannelPage() {
  const router = useRouter()
  const { query } = router
  const channelId = query.channel as string;

  const { data: gameData } = useGameById(channelId);
  const { data: channel } = usePlayerChannel(parseInt(channelId));

  useEffect(() => {
    showTelegramBackButton(router, '/')
  }, [router])

  const handleBack = () => {
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

      <ChannelLayout contentCenter isBalanceTransformed isBlurred={false}>
        {channel ? (
          <ChannelItem
            channel={channel}
            gameSettings={GAME_SETTINGS}
            onBack={handleBack}
            onNext={gameData?.next_channel_id ? handleNextChannel : undefined}
          />
        ) : (
          <Loader size="large" />
        )}
      </ChannelLayout>
    </>
  )
}
