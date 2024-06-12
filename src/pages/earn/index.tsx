import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import { channelsCampaigns } from '@/mocks/channels-campaigns'

const Hero = dynamic(() => import('@/components/Hero/Hero'), {
  ssr: false,
})
const EarnList = dynamic(() => import('@/features/earn/EarnList/EarnList'), {
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
        <Hero title="Earn More" />
        <EarnList campaigns={channelsCampaigns} />
      </DefaultLayout>
    </>
  )
}
