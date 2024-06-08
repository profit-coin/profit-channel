import { useEffect } from 'react';
import styles from './CreateAccountFlow.module.scss';
import Heading from '@/components/common/Heading/Heading';
import Text from '@/components/common/Text/Text';
import Button from '@/components/common/Button/Button';

interface CreateAccountFlowProps {
  theme: 'light' | 'dark';
  onAccountCreate: () => void;
}

function CreateAccountFlow ({ theme = 'light', onAccountCreate }: CreateAccountFlowProps) {
  useEffect(() => {
  }, []);

  const handleCreateAccount = () => {
    onAccountCreate();
  }

  return (
    <div className={styles.flow}>
      <img src="/coin.png" className={styles.logo} />
      <Heading theme={theme} size="h1">
        Welcome to Profit Game
      </Heading>
      <Text color="primary" size="large">
        Create an account to start playing and earning PROFIT tokens
      </Text>
      <Button onClick={handleCreateAccount} variant="primary">
        Create account
      </Button>
    </div>
  );
}

export default CreateAccountFlow;
