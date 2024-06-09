import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type GameState = {
  gameBalance: number
  increaseGameBalance: (points: number) => void
}

export const useGameStore = create<GameState>()(
  devtools(
    set => ({
      gameBalance: 0,

      increaseGameBalance: (points: number) =>
        set(state => ({ gameBalance: state.gameBalance + points })),
    }),
    { name: 'gameStore' },
  ),
)
