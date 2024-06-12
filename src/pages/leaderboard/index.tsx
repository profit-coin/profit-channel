import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Hero from '@/components/Hero/Hero'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import LeaderBoard from '@/features/leaderboard/LeaderBoard/LeaderBoard'

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

      <DefaultLayout>
        <Hero showBalance />
        <LeaderBoard />
      </DefaultLayout>
    </>
  )
}
