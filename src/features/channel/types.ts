import { Field } from '../field/types'

export type Channel = {
  id: string
  name: string
  slug: string
  description?: string
  cover?: string
  isPremium: boolean
  subscribers?: number
  nextChannelId?: string
}

export type Game = {
  id: string
  channel: Channel
  cell_num: number
  next_channel_id?: string
}

export type ChannelGame = Channel & {
  field?: Field
}

export type GameSettings = {
  damage: number
  field_size: number
}

export type Balance = {
  gameBalance: number
}
