import { PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './Card.module.scss'

type Props = {
  as?: 'div' | 'button'
  className?: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

function Card({ as = 'div', className, children, onClick }: PropsWithChildren<Props>) {
  const Tag = as

  return (
    <Tag
      className={cn(styles.card, className)}
      onClick={as === 'button' && onClick ? onClick : undefined}
    >
      {children}
    </Tag>
  )
}

export default Card
