import type { NextApiRequest, NextApiResponse } from 'next'

type BalanceResponse = {
  gameBalance: number
}

let currentBalance = 1500

export default function handler(req: NextApiRequest, res: NextApiResponse<BalanceResponse>) {
  const { points } = req.body

  currentBalance += points

  res.status(200).json({ gameBalance: currentBalance })
}
