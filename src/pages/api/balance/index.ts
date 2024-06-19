import type { NextApiRequest, NextApiResponse } from 'next'
import { Balance } from '@/features/channel/types'
import data from './balance.mock.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<Balance>) {
  res.status(200).json(data)
}
