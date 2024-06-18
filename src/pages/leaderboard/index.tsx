import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { TelegramUser } from '@/data/telegram'
import { tg } from '@/utils/telegram'

const Hero = dynamic(() => import('@/components/Hero/Hero'), {
  ssr: false,
})
const LeaderBoard = dynamic(() => import('@/features/leaderboard/LeaderBoard/LeaderBoard'), {
  ssr: false,
})

export default function BoostersPage() {
  const router = useRouter()

  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    setUser(tg({ router, backButton: '/' }))
  }, [router])

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
