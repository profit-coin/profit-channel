import type { NextApiRequest, NextApiResponse } from 'next'
import { IGameSettings } from '@/features/channel/types'
import data from './settings.mock.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<IGameSettings>) {
  res.status(200).json(data)
}
