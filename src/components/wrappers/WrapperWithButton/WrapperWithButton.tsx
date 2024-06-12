import { PropsWithChildren } from 'react';
import { TelegramUser } from '@/data/telegram';
import styles from './WrapperWithButton.module.scss';
import Button from '@/components/common/Button/Button';
import ScrollArea from '@/components/common/ScrollArea/ScrollArea';
import classNames from 'classnames';
import ProfileHead from '@/components/ProfileHead/ProfileHead';

interface WrapperWithButtonProps {
  onButtonClick: () => void;
  buttonLabel: string;
  user?: TelegramUser;
  isWithAccount?: boolean;
}

function WrapperWithButton ({ children, user, onButtonClick, isWithAccount, buttonLabel }: PropsWithChildren<WrapperWithButtonProps>) {
  return (
    <div className={classNames(styles.wrapper, {[styles.isWithAccount]: isWithAccount})}>
      {isWithAccount && user && (
        <ProfileHead user={user} />
      )}
      <div className={styles.content}>
        <ScrollArea rootClassName={styles.scrollAreaRoot} viewportClassName={styles.scrollAreaViewport}>
          {children}
        </ScrollArea>
      </div>
      <div className={styles.button}>
        <Button onClick={onButtonClick} variant="primary" isFullWidth>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

export default WrapperWithButton;
