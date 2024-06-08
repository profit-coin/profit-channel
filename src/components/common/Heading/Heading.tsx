import classNames from 'classnames';
import styles from './Heading.module.scss';
import { PropsWithChildren } from 'react';

interface HeadingProps {
  theme: 'light' | 'dark';
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

function Heading ({ theme, size = 'h1', children }: PropsWithChildren<HeadingProps>) {
  const Tag = size;

  return (
    <Tag className={classNames(styles.heading, styles[theme], styles[size])}>
      {children}
    </Tag>
  );
}

export default Heading;
