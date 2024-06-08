import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Text.module.scss'

interface TextProps {
  size: 'large' | 'medium' | 'small'
  align?: 'left' | 'center' | 'right'
  color: 'primary' | 'secondary' | 'tertiary'
}

function Text({ children, color, size, align = 'center' }: PropsWithChildren<TextProps>) {
  return (
    <div className={classNames(styles.text, styles[size], styles[color], styles[align])}>
      {children}
    </div>
  )
}

export default Text
