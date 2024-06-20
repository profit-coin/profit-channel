import type { NextApiRequest, NextApiResponse } from 'next'

type BalanceResponse = {
  gameBalance: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse<BalanceResponse>) {
  const { points } = req.body

  const updatedBalance = 1500 + points

  res.status(200).json({ gameBalance: updatedBalance })
}
