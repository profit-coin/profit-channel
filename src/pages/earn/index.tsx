import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { TelegramUser } from '@/data/telegram'
import { channelsCampaigns } from '@/mocks/channels-campaigns'
import { tg } from '@/utils/telegram'

const Hero = dynamic(() => import('@/components/Hero/Hero'), {
  ssr: false,
})
const EarnList = dynamic(() => import('@/features/earn/EarnList/EarnList'), {
  ssr: false,
})

export default function EarnPage() {
  const router = useRouter()

  const [isAccountCreated, setIsAccountCreated] = useState<boolean>(
    getCookie('isAccountCreated') === 'true',
  )
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
        <Hero title="Earn More" />
        <EarnList campaigns={channelsCampaigns} />
      </DefaultLayout>
    </>
  )
}
