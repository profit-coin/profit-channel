import Head from 'next/head'
import { useFindChannels } from '@/data/channels'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import ChannelsSuggestedList from '@/features/channel/ChannelsSuggestedList/ChannelsSuggestedList'

export default function AddPage() {
  const { data: channels } = useFindChannels();

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <DefaultLayout>
        {channels && <ChannelsSuggestedList channels={channels} />}
      </DefaultLayout>
    </>
  )
}
