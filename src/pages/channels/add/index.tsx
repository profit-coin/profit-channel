import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { TelegramUser } from '@/data/telegram'
import { IChannelItem } from '@/features/channel/types'
import { useChannelsSearch } from '@/hooks/useApi'
// TODO: Mock: Replace with real data
import { channels } from '@/mocks/channels-search'
import { tg } from '@/utils/telegram'

const ChannelsSuggestedList = dynamic(
  () => import('@/features/channel/ChannelsSuggestedList/ChannelsSuggestedList'),
  {
    ssr: false,
  },
)

export default function AddPage() {
  const router = useRouter()

  const {
    data: channelsData,
    error: channelsError,
    isLoading: isChannelsLoading,
  } = useChannelsSearch()

  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    setUser(tg({ router, backButton: '/channels' }))
  }, [router])

  const handleSelect = (ids: IChannelItem['id'][]) => {
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
        {channelsData && <ChannelsSuggestedList channels={channelsData} onSelect={handleSelect} />}
      </DefaultLayout>
    </>
  )
}
