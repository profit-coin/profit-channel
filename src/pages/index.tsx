import { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import ChannelLayout from '@/components/layout/ChannelLayout/ChannelLayout'
import { TelegramUser } from '@/data/telegram'
import { useChannels } from '@/hooks/useApi'
import { tg } from '@/utils/telegram'

// TODO: Mock: Replace with real data

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

export default function HomePage() {
  const [isAccountCreated, setIsAccountCreated] = useState<boolean>(
    getCookie('isAccountCreated') === 'true',
  )
  const [user, setUser] = useState<TelegramUser | null>(null)
  const { data: channelsData, error: channelsError, isLoading: isChannelsLoading } = useChannels()
  console.log('🚀 ~ HomePage ~ channelsData:', channelsData)

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
        <PlayerStat />
        {channelsData && <ChannelsBoard channels={channelsData} />}
      </ChannelLayout>
      {/* <ChannelLayout nav={<PlayerActions />}>
        {!isAccountCreated ? (
          <CreateAccountFlow theme="light" onAccountCreate={handleAccountCreate} />
        ) : null}
        {user ? (
          <>
            <PlayerStat />
            {channelsData && <ChannelsBoard channels={channelsData} />}
          </>
        ) : null}
      </ChannelLayout> */}
    </>
  )
}
