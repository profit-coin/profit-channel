import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { TELEGRAM_THEME_COLOR } from '@/constants/telegram'
import { TelegramUser } from '@/data/telegram'
import { channelsCampaigns } from '@/mocks/channels-campaigns'

const Hero = dynamic(() => import('@/components/Hero/Hero'), {
  ssr: false,
})
const EarnList = dynamic(() => import('@/features/earn/EarnList/EarnList'), {
  ssr: false,
})

export default function EarnPage() {
  const { push, query } = useRouter()

  const [isAccountCreated, setIsAccountCreated] = useState<boolean>(
    getCookie('isAccountCreated') === 'true',
  )
  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.headerColor = TELEGRAM_THEME_COLOR
      window.Telegram.WebApp.BackButton.show()
      window.Telegram.WebApp.BackButton.onClick(() => {
        push('/')
      })

      const query = new URLSearchParams(window.Telegram.WebApp.initData)
      const user = query.get('user')

      if (user) {
        setUser(JSON.parse(user))
      }
    }
  }, [push])

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
