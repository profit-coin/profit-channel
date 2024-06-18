import cn from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './PlayerActions.module.scss'

function PlayerActions() {
  const pathname = usePathname()

  const links = [
    { href: '/boosters', icon: '🚀', label: 'Boosters' },
    { href: '/leaderboard', icon: '🏆', label: 'Leaders' },
    { href: '/earn', icon: '💰', label: 'Earn' },
    { href: '/invite', icon: '👥', label: 'Invite' },
  ]

  return (
    <div className={styles.actions}>
      {links.map(link => (
        <Link
          key={link.href}
          href={link.href}
          className={cn('ghostButton', styles.action, {
            [styles.active]: pathname === link.href,
          })}
        >
          <div className={styles.icon}>{link.icon}</div>
          <div className={styles.label}>{link.label}</div>
        </Link>
      ))}
    </div>
  )
}
export default PlayerActions
