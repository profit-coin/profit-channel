import { HomeIcon } from '@radix-ui/react-icons'
import { InternalLink } from '../common/Link/Link'
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <InternalLink className={styles.link} to="/">
        <HomeIcon />
      </InternalLink>
    </footer>
  )
}

export default Footer
