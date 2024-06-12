import { PropsWithChildren } from 'react';
import styles from './DefaultWrapper.module.scss';
import ScrollArea from '@/components/common/ScrollArea/ScrollArea';

function DefaultWrapper({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapper}>
      <ScrollArea rootClassName={styles.scrollAreaRoot} viewportClassName={styles.scrollAreaViewport}>
        {children}
      </ScrollArea>
    </div>
  );
}

export default DefaultWrapper;
