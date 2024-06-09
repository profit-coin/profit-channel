import { PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'
import styles from './ChannelLayout.module.scss'

const Balance = dynamic(() => import('@/components/Balance/Balance'), {
  ssr: false,
})
const PlayerStat = dynamic(() => import('@/components/PlayerStat/PlayerStat'), {
  ssr: false,
})
const PlayerActions = dynamic(() => import('@/components/PlayerActions/PlayerActions'), {
  ssr: false,
})

function ChannelLayout({ children }: PropsWithChildren) {
  return (
    <main className={styles.layout}>
      <Balance />
      <PlayerStat />

      {children}

      <PlayerActions />
    </main>
  )
}

export default ChannelLayout
