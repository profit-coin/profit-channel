import { Field } from '../field/types'

export type Channel = {
  id: string
  name: string
  description?: string
  field?: Field
  cover?: string
  isPremium: boolean
  subscribers?: number
  nextChannelId?: string
}
