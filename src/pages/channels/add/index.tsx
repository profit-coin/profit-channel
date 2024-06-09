import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { Channel } from '@/features/channel/types'
// TODO: Mock: Replace with real data
import { channels } from '@/mocks/channels'

const ChannelsBoard = dynamic(() => import('@/features/channel/ChannelsBoard/ChannelsBoard'), {
  ssr: false,
})

function getData(): Channel[] {
  return channels
}

export default function AddPage() {
  const router = useRouter()

  const channelsList = getData()

  const handleSelect = (id: Channel['id']) => {
    router.push(`/channels/${id}`)
  }

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <DefaultLayout>FORM</DefaultLayout>
    </>
  )
}