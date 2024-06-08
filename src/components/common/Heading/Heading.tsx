import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Heading.module.scss'

interface HeadingProps {
  theme?: 'light' | 'dark'
  align?: 'left' | 'center' | 'right'
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

function Heading({
  theme = 'light',
  size = 'h1',
  align = 'center',
  children,
}: PropsWithChildren<HeadingProps>) {
  const Tag = size

  return (
    <Tag className={classNames(styles.heading, styles[theme], styles[size], styles[align])}>
      {children}
    </Tag>
  )
}

export default Heading
