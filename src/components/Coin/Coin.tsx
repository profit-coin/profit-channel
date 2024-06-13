import cn from 'classnames'
import CoinSVG from '../../../public/coin.svg'

interface Props {
  size?: number
}

function Coin({ size = 24 }: Props) {
  return <CoinSVG width={size} height={size} />
}

export default Coin
