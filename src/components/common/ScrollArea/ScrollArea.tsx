import { PropsWithChildren } from 'react';
import * as RadixScrollArea from '@radix-ui/react-scroll-area';
import styles from './ScrollArea.module.scss';
import classNames from 'classnames';

interface ScrollAreaProps {
  rootClassName?: string;
  viewportClassName?: string;
}

function ScrollArea ({ children, rootClassName, viewportClassName }: PropsWithChildren<ScrollAreaProps>) {
  return (
    <RadixScrollArea.Root className={classNames(styles.root, rootClassName)}>
      <RadixScrollArea.Viewport className={classNames(styles.viewport, viewportClassName)}>
        {children}
      </RadixScrollArea.Viewport>
      <RadixScrollArea.Scrollbar className={styles.scrollBar} orientation="vertical">
        <RadixScrollArea.Thumb className={styles.scrollBarThumb} />
      </RadixScrollArea.Scrollbar>
    </RadixScrollArea.Root>
  );
}

export default ScrollArea;
