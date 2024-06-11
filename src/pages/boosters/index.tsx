import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import ChannelLayout from '@/components/layout/ChannelLayout/ChannelLayout'

const PlayerActions = dynamic(() => import('@/components/PlayerActions/PlayerActions'), {
  ssr: false,
})

export default function BoostersPage() {
  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ChannelLayout nav={<PlayerActions />}>
        Boosters
        <p>
          <Link href="/">Home</Link>
        </p>
      </ChannelLayout>
    </>
  )
}
