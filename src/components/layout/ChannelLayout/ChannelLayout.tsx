import { PropsWithChildren, ReactNode, useEffect } from 'react'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import { Mada } from 'next/font/google'
import { useGameStore } from '@/features/game/gameStore'
import styles from './ChannelLayout.module.scss'

const font = Mada({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
})

const SystemMessage = dynamic(() => import('@/components/SystemMessage/SystemMessage'), {
  ssr: false,
})
const Balance = dynamic(() => import('@/components/Balance/Balance'), {
  ssr: false,
})

type Props = {
  nav?: ReactNode
}

function ChannelLayout({ children, nav }: Props & PropsWithChildren) {
  const { clearError, error, initializeBalance } = useGameStore()

  useEffect(() => {
    initializeBalance()
  }, [initializeBalance])

  return (
    <div className={cn(styles.layout, font.className)}>
      {/* {error && <SystemMessage text={error} type="error" onClose={clearError} />} */}

      <main className={styles.main}>
        <Balance />

        {children}
      </main>

      {nav}
    </div>
  )
}

export default ChannelLayout
