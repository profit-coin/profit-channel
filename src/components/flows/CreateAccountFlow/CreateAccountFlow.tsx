/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react'
import Box from '@/components/common/Box/Box'
import Button from '@/components/common/Button/Button'
import Heading from '@/components/common/Heading/Heading'
import Text from '@/components/common/Text/Text'
import styles from './CreateAccountFlow.module.scss'

interface CreateAccountFlowProps {
  theme: 'light' | 'dark'
  onAccountCreate: () => void
}

function CreateAccountFlow({ theme = 'light', onAccountCreate }: CreateAccountFlowProps) {
  useEffect(() => {}, [])

  const handleCreateAccount = () => {
    onAccountCreate()
  }

  return (
    <div className={styles.flow}>
      <img src="/coin.png" className={styles.logo} alt="" />

      <Box mb="6">
        <Heading theme={theme} size="h1">
          Welcome to Profit Game
        </Heading>
      </Box>

      <Box mb="6">
        <Text color="primary" size="large">
          Create an account to start playing and earning PROFIT tokens
        </Text>
      </Box>

      <div>
        <Button variant="primary" onClick={handleCreateAccount}>
          Create account
        </Button>
      </div>
    </div>
  )
}

export default CreateAccountFlow
