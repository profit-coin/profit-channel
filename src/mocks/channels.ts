import { distributeBoxes } from '../utils/distributeBoxes'

const fieldSize = 5

export const channels = [
  {
    id: '1',
    name: 'TON Crypto News',
    field: distributeBoxes(35, fieldSize),
    cover: '/uploads/covers/ton_crypto_news.jpeg',
    isPremium: true,
    nextChannelId: '2',
  },
  {
    id: '2',
    name: 'TON Community',
    field: distributeBoxes(15, fieldSize),
    cover: '/uploads/covers/ton_community.jpeg',
    isPremium: true,
    nextChannelId: '3',
  },
  {
    id: '3',
    name: 'The Daily TON',
    field: distributeBoxes(142, fieldSize),
    cover: '/uploads/covers/the_daily_ton.jpeg',
    isPremium: false,
    nextChannelId: '4',
  },
  {
    id: '4',
    name: 'Метаверсище и ИИще 🤖',
    field: distributeBoxes(287, fieldSize),
    cover: '/uploads/covers/metaversische.jpeg',
    isPremium: false,
    nextChannelId: '5',
  },
  {
    id: '5',
    name: 'Notcoin Community',
    field: distributeBoxes(42, fieldSize),
    cover: '/uploads/covers/notcoin_community.jpeg',
    isPremium: false,
  },
]
