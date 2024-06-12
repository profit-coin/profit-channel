import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ChannelLayout from '@/components/layout/ChannelLayout/ChannelLayout'
import { TELEGRAM_THEME_COLOR } from '@/constants/telegram'
import { TelegramUser } from '@/data/telegram'
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

  const { push, query } = useRouter()
  const [user, setUser] = useState<TelegramUser | null>(null)
  const slug = query.slug as string

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.headerColor = TELEGRAM_THEME_COLOR
      window.Telegram.WebApp.BackButton.show()
      window.Telegram.WebApp.BackButton.onClick(() => {
        push('/')
      })

      const query = new URLSearchParams(window.Telegram.WebApp.initData)
      const user = query.get('user')

      if (user) {
        setUser(JSON.parse(user))
      }
    }
  }, [push])

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
