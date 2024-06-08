import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
  variant: 'primary' | 'secondary'
  onClick: () => void
}

function Button({ children, onClick, variant }: PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={onClick} className={classNames(styles.button, styles[variant])}>
      {children}
    </button>
  )
}

export default Button
