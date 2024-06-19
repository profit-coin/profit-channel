import type { NextApiRequest, NextApiResponse } from 'next'
import { ChannelItem } from '@/features/channel/types'
import data from './channels.mock.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<ChannelItem[]>) {
  res.status(200).json(data)
}
