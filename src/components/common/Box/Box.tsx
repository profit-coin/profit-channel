import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './Box.module.scss'

interface BoxProps {
  mt?: '2' | '4' | '6'
  mb?: '2' | '4' | '6'
}

function Box({ children, mt, mb }: PropsWithChildren<BoxProps>) {
  return (
    <div className={classNames(styles.box, styles[`mb${mb}`], styles[`mt${mt}`])}>{children}</div>
  )
}

export default Box
