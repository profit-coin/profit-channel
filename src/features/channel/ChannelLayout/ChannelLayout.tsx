import { ReactNode } from 'react'
import { Balance } from '@/components/Balance/Balance'
import styles from './ChannelLayout.module.scss'

function ChannelLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.layout}>
      <Balance balance={300} />

      {children}
    </main>
  )
}

export default ChannelLayout
