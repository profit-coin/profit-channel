import type { NextApiRequest, NextApiResponse } from 'next'
import { IGameItem } from '@/features/channel/types'
import data from './../games.mock.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<IGameItem>) {
  const gameId = req.query.id
  if (!gameId || typeof gameId !== 'string') return null
  const game = data.find(g => g.id === gameId)
  if (!game) return null
  res.status(200).json(game)
}
