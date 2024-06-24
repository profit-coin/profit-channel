import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { useFindChannels } from '@/data/channels'
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout'
import ChannelsSuggestedList from '@/features/channel/ChannelsSuggestedList/ChannelsSuggestedList'
import { showTelegramBackButton } from '@/utils/telegram';

export default function AddPage() {
  const router = useRouter();
  const { data: channels } = useFindChannels();

  useEffect(() => {
    showTelegramBackButton(router, '/');
  });

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
