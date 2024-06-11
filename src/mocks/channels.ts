import { distributeBoxes } from '../utils/distributeBoxes'

const fieldSize = 5

export const channels = [
  {
    id: '1',
    name: 'TON Crypto News',
    field: distributeBoxes(35, fieldSize),
    cover: '/uploads/covers/tonc_news.jpeg',
    slug: 'tonc_news',
    isPremium: true,
    nextChannelId: '2',
  },
  {
    id: '2',
    name: 'TON Community',
    field: distributeBoxes(15, fieldSize),
    cover: '/uploads/covers/toncoin.jpeg',
    slug: 'toncoin',
    isPremium: true,
    nextChannelId: '3',
  },
  {
    id: '3',
    name: 'The Daily TON',
    field: distributeBoxes(142, fieldSize),
    cover: '/uploads/covers/thedailytonrus.jpeg',
    slug: 'thedailytonrus',
    isPremium: false,
    nextChannelId: '4',
  },
  {
    id: '4',
    name: 'Метаверсище и ИИще 🤖',
    field: distributeBoxes(287, fieldSize),
    cover: '/uploads/covers/cgevent.jpeg',
    slug: 'cgevent',
    isPremium: false,
    nextChannelId: '5',
  },
  {
    id: '5',
    name: 'Notcoin Community',
    field: distributeBoxes(42, fieldSize),
    cover: '/uploads/covers/notcoin.jpeg',
    slug: 'notcoin',
    isPremium: false,
  },
]
