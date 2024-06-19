import type { NextApiRequest, NextApiResponse } from 'next'
import { GameSettings } from '@/features/channel/types'
import data from './settings.mock.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<GameSettings>) {
  res.status(200).json(data)
}
