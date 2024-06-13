import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { TELEGRAM_THEME_COLOR } from '@/constants/telegram'
import { TelegramUser } from '@/data/telegram'
import { Campaign, Task } from '@/features/earn/types'
import { channelsCampaigns } from '@/mocks/channels-campaigns'
import { tasks } from '@/mocks/tasks'

const Hero = dynamic(() => import('@/components/Hero/Hero'), {
  ssr: false,
})
const EarnBoard = dynamic(() => import('@/features/earn/EarnBoard/EarnBoard'), {
  ssr: false,
})

function getData(id: Campaign['id']): Campaign | null {
  const currentChannel = channelsCampaigns.find(campaign => campaign.id === id)
  return currentChannel || null
}

// function getTasksData(id: Campaign['id']): Campaign | null {
//   const currentChannel = channelsCampaigns.find(campaign => campaign.id === id)
//   return currentChannel || null
// }

export default function EarnCampaignPage() {
  const { push, query } = useRouter()
  const { id: channelId } = query

  const campaignData = getData(channelId as Campaign['id'])

  const [isAccountCreated, setIsAccountCreated] = useState<boolean>(
    getCookie('isAccountCreated') === 'true',
  )
  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.headerColor = TELEGRAM_THEME_COLOR
      window.Telegram.WebApp.BackButton.show()
      window.Telegram.WebApp.BackButton.onClick(() => {
        push('/earn')
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
        <Hero title={campaignData?.name} description={campaignData?.description} />
        {campaignData && <EarnBoard campaign={campaignData} tasks={tasks as Task[]} />}
      </DefaultLayout>
    </>
  )
}
