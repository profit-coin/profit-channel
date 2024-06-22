import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Button from '@/components/common/Button/Button'
import Heading from '@/components/common/Heading/Heading'
import Text from '@/components/common/Text/Text'
import styles from './index.module.scss'
import Lottie from 'lottie-react'
import coinAnimation from '../../../public/animation/coin.json'
import { useCreateUserMutation } from '@/data/user'
import { TelegramUser } from '@/data/telegram'
import {useAuth} from '@/auth/authContext'

function LoginPage () {
  const { login } = useAuth();
  const { push } = useRouter();
  const { t } = useTranslation();

  const [ isSubmitting, setIsSubmitting ] = useState(false);
  const [ telegramUser, setTelegramUser ] = useState<TelegramUser | null>(null)
  const createUserMutation = useCreateUserMutation();

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      window.Telegram.WebApp.BackButton.hide();
      const query = new URLSearchParams(window.Telegram.WebApp.initData)
      const user = query.get('user')

      if (user) {
        setTelegramUser(JSON.parse(user))
      }
    }
  }, [])

  const handleCreateAccount = async () => {
    if (!telegramUser) {
      return;
    }

    setIsSubmitting(true);
    try {
      await createUserMutation.mutateAsync({
        telegramId: telegramUser.id,
        username: telegramUser.username,
        firstName: telegramUser.first_name,
        lastName: telegramUser.last_name,
        language: telegramUser.language_code,
      });

      login && await login(window.Telegram.WebApp.initData);

      push('/');
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Lottie animationData={coinAnimation} className={styles.logo} />
        <Heading size="h1">
          {t('flows.createAccount.title')}
        </Heading>
        <Text color="primary" size="large">
          {t('flows.createAccount.description')}
        </Text>
      </div>
      <div className={styles.footer}>
        <Button onClick={handleCreateAccount} isFullWidth isLoading={isSubmitting}>
          {t('flows.createAccount.button')}
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
