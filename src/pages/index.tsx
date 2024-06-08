import ProfileHead from '@/components/ProfileHead/ProfileHead';
import CreateAccountFlow from '@/components/flows/CreateAccountFlow/CreateAccountFlow';
import {TelegramUser} from '@/data/telegram';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.headerColor = 'rgba(47,44,170,1)';
      const query = new URLSearchParams(window.Telegram.WebApp.initData);
      const user = query.get('user');

      if (user) {
        setUser(JSON.parse(user));
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Profit Channel</title>
        <meta name="description" content="Profit Channel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {user ? (
          <>
            <CreateAccountFlow theme="light" />
            <ProfileHead user={user} />
          </>
        ) : null}
      </main>
    </>
  )
}
