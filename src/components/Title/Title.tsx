import { PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Title.module.scss'

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'div' | 'p' | 'span'
  className?: string
}

function Title({ as = 'div', className, children }: PropsWithChildren<Props>) {
  const Tag = as

  return <Tag className={cn(styles.title, styles[as], className)}>{children}</Tag>
}
export default Title
