import { PropsWithChildren } from 'react';
import { Mada } from 'next/font/google';
import Footer from '../../Footer/Footer';
import styles from './DefaultLayout.module.scss';

const font = Mada({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
});

function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.layout}>
      <div className={font.className}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
