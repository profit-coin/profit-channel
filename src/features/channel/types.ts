export type IChannelItem = {
  id: string
  name: string
  slug: string
  description?: string
  icon_url?: string
  is_premium: boolean
  subscribers?: number
}

export type IGameItem = {
  id: string
  channel: IChannelItem
  cell_num: number
  next_channel_id?: string
}

export type IGameSettings = {
  damage: number
  field_size: number
}

export type IGameBalance = {
  gameBalance: number
}
