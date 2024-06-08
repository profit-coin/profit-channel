import { useEffect } from 'react';
import styles from './CreateAccountFlow.module.scss';
import Heading from '@/components/common/Heading/Heading';
import Text from '@/components/common/Text/Text';

interface CreateAccountFlowProps {
  theme: 'light' | 'dark';
}

function CreateAccountFlow ({ theme = 'light' }: CreateAccountFlowProps) {
  useEffect(() => {
  }, []);

  return (
    <div className={styles.flow}>
      <img src="/coin.png" className={styles.logo} />
      <Heading theme={theme} size="h1">
        Welcome to Profit Game
      </Heading>
      <Text color="primary" size="large">
        Create an account to start playing and earning PROFIT tokens
      </Text>
    </div>
  );
}

export default CreateAccountFlow;
