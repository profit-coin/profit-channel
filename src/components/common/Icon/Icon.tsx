import { PlusIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import styles from './Icon.module.scss';

interface IconProps {
  iconName: 'plus';
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

function Icon ({ iconName, className, size = 'medium' }: IconProps) {
  const Icon = {
    plus: PlusIcon
  }

  const IconComponent = Icon[iconName];

  return <IconComponent className={classNames(styles.icon, styles[size], className)} />
}

export default Icon;
