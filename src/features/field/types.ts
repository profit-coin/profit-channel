export type Box = {
  id: number
  below: number[]
  x: number
  y: number
  level: number
}

export type Position = {
  x: number
  y: number
  level: number
}

export type Field = { [key: string]: Box[] }
