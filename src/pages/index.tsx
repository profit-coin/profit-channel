// import ProfileHead from '@/components/ProfileHead/ProfileHead';
import { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import ChannelLayout from '@/components/layout/ChannelLayout/ChannelLayout'
import { TelegramUser } from '@/data/telegram'
import { Channel } from '@/features/channel/types'
import { tg } from '@/utils/telegram'
// TODO: Mock: Replace with real data
import { channels } from '../mocks/channels'

const ChannelsBoard = dynamic(() => import('@/features/channel/ChannelsBoard/ChannelsBoard'), {
  ssr: false,
})
const CreateAccountFlow = dynamic(
  () => import('@/components/flows/CreateAccountFlow/CreateAccountFlow'),
  { ssr: false },
)
const PlayerStat = dynamic(() => import('@/components/PlayerStat/PlayerStat'), {
  ssr: false,
})
const PlayerActions = dynamic(() => import('@/components/PlayerActions/PlayerActions'), {
  ssr: false,
})

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
    setUser(tg({}))
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
      <ChannelLayout nav={<PlayerActions />}>
        {!isAccountCreated ? (
          <CreateAccountFlow theme="light" onAccountCreate={handleAccountCreate} />
        ) : null}
        {user ? (
          <>
            <PlayerStat />
            <ChannelsBoard channels={channelsList} />
          </>
        ) : null}
      </ChannelLayout>
    </>
  )
}
