import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'success' | 'accent'
  isFullWidth?: boolean
  isLoading?: boolean
  onClick: () => void
}

function Button({ children, onClick, variant, isFullWidth, isLoading }: PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={onClick} className={classNames(styles.button, styles[variant], {[styles.fullWidth]: isFullWidth})}>
      {children}
    </button>
  )
}

export default Button
