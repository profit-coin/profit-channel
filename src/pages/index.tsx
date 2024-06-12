// import ProfileHead from '@/components/ProfileHead/ProfileHead';
import { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { TELEGRAM_THEME_COLOR } from '@/constants/telegram'
import { TelegramUser } from '@/data/telegram'
import { Channel } from '@/features/channel/types'
// TODO: Mock: Replace with real data
import { channels } from '../mocks/channels'

const ChannelsBoard = dynamic(() => import('@/features/channel/ChannelsBoard/ChannelsBoard'), {
  ssr: false,
})
const CreateAccountFlow = dynamic(
  () => import('@/components/flows/CreateAccountFlow/CreateAccountFlow'),
  { ssr: false },
)

function getData(): Channel[] {
  return channels
}

export default function HomePage() {
  const [isAccountCreated, setIsAccountCreated] = useState<boolean>(
    getCookie('isAccountCreated') === 'true',
  )
  const [user, setUser] = useState<TelegramUser | null>(null)
  const channelsList = getData()

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.headerColor = TELEGRAM_THEME_COLOR
      window.Telegram.WebApp.BackButton.hide()
      const query = new URLSearchParams(window.Telegram.WebApp.initData)
      const user = query.get('user')

      if (user) {
        setUser(JSON.parse(user))
      }
    }
  }, [])

  const handleAccountCreate = () => {
    setIsAccountCreated(true)
    setCookie('isAccountCreated', 'true')
  }

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultLayout>
        {!isAccountCreated ? (
          <CreateAccountFlow theme="light" onAccountCreate={handleAccountCreate} />
        ) : null}
        {user ? <ChannelsBoard channels={channelsList} /> : null}
      </DefaultLayout>
    </>
  )
}
