import { Field } from '../field/types'

export type Channel = {
  id: number
  name: string
  field: Field
  cover?: string
  isPremium: boolean
}
