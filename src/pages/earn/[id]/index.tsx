import { useEffect, useState } from 'react'
import { getCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { TelegramUser } from '@/data/telegram'
import { Campaign, Task } from '@/features/earn/types'
import { channelsCampaigns } from '@/mocks/channels-campaigns'
import { tasks } from '@/mocks/tasks'
import { tg } from '@/utils/telegram'

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
  const router = useRouter()
  const { id: channelId } = router.query

  const campaignData = getData(channelId as Campaign['id'])

  const [user, setUser] = useState<TelegramUser | null>(null)

  useEffect(() => {
    setUser(tg({ router, backButton: '/earn' }))
  }, [router])

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
