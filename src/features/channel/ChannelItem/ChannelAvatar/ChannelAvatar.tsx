/* eslint-disable @next/next/no-img-element */
import { PublicChannel } from '@/data/channels';
import styles from './ChannelAvatar.module.scss';
import classNames from 'classnames';

interface ChannelAvatarProps {
  size?: 'small' | 'medium' | 'large';
  channel: PublicChannel;
}

function ChannelAvatar ({ channel, size = 'medium' }: ChannelAvatarProps) {
  return (
    <div className={classNames(styles.wrapper, styles[size])}>
      {channel.avatar ?
        <img src={channel.avatar} alt={channel.title} className={styles.image} />
      : <div className={styles.defaultImage}>{channel.title[0]}</div>}
    </div>
  );
}

export default ChannelAvatar;

