import { PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'
import styles from './ChannelLayout.module.scss'

const Balance = dynamic(() => import('@/components/Balance/Balance'), {
  ssr: false,
})

function ChannelLayout({ children }: PropsWithChildren) {
  return (
    <main className={styles.layout}>
      <Balance />

      {children}
    </main>
  )
}

export default ChannelLayout
