import {
  PropsWithChildren,
  ReactNode,
} from 'react'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import { Mada } from 'next/font/google'
import styles from './ChannelLayout.module.scss'
import { useUserBalance } from '@/data/user'

const font = Mada({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
})

const Balance = dynamic(() => import('@/components/Balance/Balance'), {
  ssr: false,
})

type Props = {
  nav?: ReactNode
  isBlurred?: boolean
  contentCenter?: boolean
  isBalanceTransformed?: boolean
}

function ChannelLayout({ children, nav, isBlurred = true, contentCenter, isBalanceTransformed }: Props & PropsWithChildren) {
  const { data: balance, isLoading: isBalanceLoading } = useUserBalance();

  return (
    <div className={cn(styles.layout, font.className)}>
      <main className={styles.main}>
        {isBlurred && <div className={styles.blur} />}
        <Balance balance={balance} isLoading={isBalanceLoading} isTransformed={isBalanceTransformed} />
        <div className={cn(styles.content, { [styles.center]: contentCenter })}>{children}</div>
      </main>
      {nav}
    </div>
  )
}

export default ChannelLayout
