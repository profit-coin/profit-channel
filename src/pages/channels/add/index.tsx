import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { TelegramUser } from '@/data/telegram'
import { Channel } from '@/features/channel/types'
// TODO: Mock: Replace with real data
import { channels } from '@/mocks/channels-search'
import { tg } from '@/utils/telegram'

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
  const router = useRouter()

  const channelsList = getData()

  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    setUser(tg({ router, backButton: '/channels' }))
  }, [router])

  const handleSelect = (ids: Channel['id'][]) => {
    console.log('🚀 ~ ids:', ids)
    router.push('/channels')
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
