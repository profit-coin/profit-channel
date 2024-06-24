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
}

function ChannelLayout({ children, nav }: Props & PropsWithChildren) {
  const { data: balance } = useUserBalance();

  return (
    <div className={cn(styles.layout, font.className)}>
      <main className={styles.main}>
        <Balance balance={balance} />
        {children}
      </main>
      {nav}
    </div>
  )
}

export default ChannelLayout
