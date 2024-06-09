import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
// import { Balance } from '@/components/Balance/Balance'
import styles from './ChannelLayout.module.scss'

const Balance = dynamic(() => import('@/components/Balance/Balance'), {
  ssr: false,
})

function ChannelLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.layout}>
      <Balance />

      {children}
    </main>
  )
}

export default ChannelLayout
