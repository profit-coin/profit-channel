// import ProfileHead from '@/components/ProfileHead/ProfileHead';
import { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { TelegramUser } from '@/data/telegram'

const GameView = dynamic(() => import('@/features/game/GameView/GameView'), { ssr: false })
const CreateAccountFlow = dynamic(
  () => import('@/components/flows/CreateAccountFlow/CreateAccountFlow'),
  { ssr: false },
)

export default function Home() {
  const [isAccountCreated, setIsAccountCreated] = useState<boolean>(
    getCookie('isAccountCreated') === 'true',
  )
  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.headerColor = 'rgba(47,44,170,1)'
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
      <main>
        {!isAccountCreated ? (
          <CreateAccountFlow theme="light" onAccountCreate={handleAccountCreate} />
        ) : null}
        {user ? <GameView /> : null}
      </main>
    </>
  )
}
