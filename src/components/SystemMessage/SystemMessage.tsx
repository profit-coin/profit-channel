import { Cross1Icon } from '@radix-ui/react-icons'
import cn from 'classnames'
import styles from './SystemMessage.module.scss'

type Props = {
  text: string | null
  type?: 'error' | 'warning' | 'success' | 'info'
  onClose?: () => void
}

function SystemMessage({ type = 'info', text, onClose }: Props) {
  return (
    <div className={cn(styles.message, styles[type])}>
      <span className={styles.text}>{text}</span>
      <button className={cn(styles.close, 'ghostButton')} onClick={onClose}>
        <Cross1Icon />
      </button>
    </div>
  )
}

export default SystemMessage
