import styles from './Loader.module.scss';
import Spinner from '../../../../public/spinner.svg';
import classNames from 'classnames';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
}

function Loader ({ size = 'medium' }: LoaderProps) {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.loader, styles[size])}>
        <Spinner />
      </div>
    </div>
  );
}

export default Loader;
