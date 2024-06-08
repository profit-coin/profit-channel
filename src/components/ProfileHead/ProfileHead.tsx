import { TelegramUser } from '@/data/telegram'
import styles from './ProfileHead.module.scss'

interface ProfileHeadProps {
  user: TelegramUser
}

function ProfileHead({ user }: ProfileHeadProps) {
  return (
    <div className={styles.content}>
      <h1 className={styles.name}>
        {user.first_name} {user.last_name}
      </h1>
      <span className={styles.username}>@{user.username}</span>
      <span className={styles.ballance}>1 128 PR</span>
    </div>
  )
}

export default ProfileHead
