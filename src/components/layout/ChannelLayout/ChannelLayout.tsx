import { PropsWithChildren, ReactNode, useEffect } from 'react'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import { Mada } from 'next/font/google'
import { useGameStore } from '@/features/game/gameStore'
import { useBalance } from '@/hooks/useApi'
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
  contentCenter?: boolean
}

function ChannelLayout({ children, nav, contentCenter }: Props & PropsWithChildren) {
  const { data: balanceData, error: balanceError, isLoading: isBalanceLoading } = useBalance()

  useEffect(() => {
    if (balanceData) {
      useGameStore.setState({ gameBalance: balanceData.gameBalance })
    }
  }, [balanceData])

  return (
    <div className={cn(styles.layout, font.className)}>
      {/* {balanceError && <SystemMessage text={balanceError.toString()} type="error" />} */}

      <main className={styles.main}>
        <Balance />

        <div className={cn(styles.content, { [styles.center]: contentCenter })}>{children}</div>
      </main>

      {nav}
    </div>
  )
}

export default ChannelLayout
