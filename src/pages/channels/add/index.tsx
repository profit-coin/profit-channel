import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { TELEGRAM_THEME_COLOR } from '@/constants/telegram'
import { TelegramUser } from '@/data/telegram'
import { Channel } from '@/features/channel/types'
// TODO: Mock: Replace with real data
import { channels } from '@/mocks/channels-search'

const ChannelsSuggestedList = dynamic(
  () => import('@/features/channel/ChannelsSuggestedList/ChannelsSuggestedList'),
  {
    ssr: false,
  },
)

function getData(): Channel[] {
  return channels
}

export default function AddPage() {
  const { push, query } = useRouter()

  const channelsList = getData()

  const [isAccountCreated, setIsAccountCreated] = useState<boolean>(
    getCookie('isAccountCreated') === 'true',
  )
  const [user, setUser] = useState<TelegramUser | null>(null)

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

  const handleSelect = (ids: Channel['id'][]) => {
    console.log('🚀 ~ ids:', ids)
    push('/channels')
  }

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <DefaultLayout>
        <ChannelsSuggestedList channels={channelsList} onSelect={handleSelect} />
      </DefaultLayout>
    </>
  )
}
