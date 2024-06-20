import type { NextApiRequest, NextApiResponse } from 'next'
import { IChannelItem } from '@/features/channel/types'
import data from './search.mock.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<IChannelItem[]>) {
  res.status(200).json(data)
}
