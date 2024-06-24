import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import ChannelLayout from '@/components/layout/ChannelLayout/ChannelLayout'
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout'
import { usePlayerChannels } from '@/data/channels'
import { hideTelegramBackButton } from '@/utils/telegram'

const ChannelsBoard = dynamic(() => import('@/features/channel/ChannelsBoard/ChannelsBoard'), {
  ssr: false,
})
const PlayerStat = dynamic(() => import('@/components/PlayerStat/PlayerStat'), {
  ssr: false,
})
const PlayerActions = dynamic(() => import('@/components/PlayerActions/PlayerActions'), {
  ssr: false,
})

export default function ChannelsPage() {
  const { data: playerChannels } = usePlayerChannels();

  useEffect(() => {
    hideTelegramBackButton();
    if (window.Telegram?.WebApp && !window.Telegram?.WebApp?.isExpanded) {
      window.Telegram.WebApp.expand()
    }
  }, []);

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AuthLayout>
        <ChannelLayout nav={<PlayerActions />}>
          <PlayerStat />

          {playerChannels && <ChannelsBoard channels={playerChannels} />}
        </ChannelLayout>
      </AuthLayout>
    </>
  )
}
