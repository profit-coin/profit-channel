import { PropsWithChildren } from 'react'
import cn from 'classnames'
import dynamic from 'next/dynamic'
import { Mada } from 'next/font/google'
import styles from './ChannelLayout.module.scss'

const font = Mada({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
})

const Balance = dynamic(() => import('@/components/Balance/Balance'), {
  ssr: false,
})

function ChannelLayout({ children }: PropsWithChildren) {
  return (
    <main className={cn(styles.layout, font.className)}>
      <Balance />

      {children}
    </main>
  )
}

export default ChannelLayout
