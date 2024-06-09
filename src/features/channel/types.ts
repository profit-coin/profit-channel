import { Field } from '../field/types'

export type Channel = {
  id: string
  name: string
  field: Field
  cover?: string
  isPremium: boolean
}
