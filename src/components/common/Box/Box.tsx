import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Box.module.scss'

interface BoxProps {
  mb?: '2' | '4' | '6'
}

function Box({ children, mb }: PropsWithChildren<BoxProps>) {
  return <div className={classNames(styles.box, styles[`mb${mb}`])}>{children}</div>
}

export default Box
