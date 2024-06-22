import { useEffect, useState } from 'react'
import { getCookie, setCookie } from 'cookies-next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '@/auth/authContext'
import AuthLayout from '@/components/layout/AuthLayout/AuthLayout'
import ChannelLayout from '@/components/layout/ChannelLayout/ChannelLayout'
import { TelegramUser } from '@/data/telegram'
import { useChannels } from '@/hooks/useApi'
import { tg } from '@/utils/telegram'

// TODO: Mock: Replace with real data

const ChannelsBoard = dynamic(() => import('@/features/channel/ChannelsBoard/ChannelsBoard'), {
  ssr: false,
})
const CreateAccountFlow = dynamic(
  () => import('@/components/flows/CreateAccountFlow/CreateAccountFlow'),
  { ssr: false },
)
const PlayerStat = dynamic(() => import('@/components/PlayerStat/PlayerStat'), {
  ssr: false,
})
const PlayerActions = dynamic(() => import('@/components/PlayerActions/PlayerActions'), {
  ssr: false,
})

export default function HomePage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.BackButton.hide()
    }
  }, [])

  return (
    <AuthLayout>
      <button onClick={() => router.push('/channels')}>START THE GAME</button>
    </AuthLayout>
  )
}
