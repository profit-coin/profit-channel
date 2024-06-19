import type { NextApiRequest, NextApiResponse } from 'next'
import { IGameBalance } from '@/features/channel/types'
import data from './balance.mock.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<IGameBalance>) {
  res.status(200).json(data)
}
