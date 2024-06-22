import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../balance/balance.mock.json'

type BalanceResponse = {
  gameBalance: number
}

let currentBalance = data.gameBalance

export default function handler(req: NextApiRequest, res: NextApiResponse<BalanceResponse>) {
  const { points } = req.body

  currentBalance += points

  res.status(200).json({ gameBalance: currentBalance })
}
