import { PropsWithChildren } from 'react'
import cn from 'classnames'
import { Mada } from 'next/font/google'
import styles from './DefaultLayout.module.scss'

// import Footer from '../../Footer/Footer';

const font = Mada({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
})

function DefaultLayout({ children }: PropsWithChildren) {
  return <div className={cn(styles.layout, font.className)}>{children}</div>
}

export default DefaultLayout
