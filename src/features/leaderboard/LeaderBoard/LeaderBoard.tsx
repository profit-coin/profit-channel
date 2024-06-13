import cn from 'classnames'
import dynamic from 'next/dynamic'
import Box from '@/components/common/Box/Box'
import Heading from '@/components/common/Heading/Heading'
import Leader from '../Leader/Leader'
import styles from './LeaderBoard.module.scss'

const LeadersStat = dynamic(() => import('../leadersStat/LeadersStat'), {
  ssr: false,
})

const Leaders = [
  { name: 'noName', lvl: 3, money: 23543 },
  { name: 'andr_ewtf', lvl: 1, money: 10000 },
  { name: 'itechmeat', lvl: 2, money: 8000 },
  { name: 'someone_was_here', lvl: 1, money: 6020 },
  { name: 'snakls', lvl: 1, money: 6000 },
  { name: 'DavidHan', lvl: 1, money: 5892 },
  { name: 'number1', lvl: 1, money: 5670 },
]

type Props = {}

function LeaderBoard() {
  return (
    <div className={styles.boosters}>
      <Box mb="6">
        <Heading size="h2">Leader Board</Heading>
      </Box>

      <LeadersStat />

      <div className={styles.leaders}>
        {Leaders.map((leader, index) => (
          <Leader
            key={index}
            place={index + 1}
            name={leader.name}
            lvl={leader.lvl}
            money={leader.money}
          ></Leader>
        ))}
      </div>
    </div>
  )
}

export default LeaderBoard
