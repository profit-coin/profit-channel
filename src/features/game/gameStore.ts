import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type GameState = {
  gameBalance: number
  playerLevel: number
  levelTotal: number
  levelProgress: number
  increaseGameBalance: (points: number) => void
  setPlayerLevel: (level: number) => void
  updateLevelProgress: (progress: number) => void
}

export const useGameStore = create<GameState>()(
  devtools(
    set => ({
      gameBalance: 0,
      playerLevel: 4,
      levelTotal: 3000000,
      levelProgress: 1459384,

      increaseGameBalance: (points: number) =>
        set(state => ({ gameBalance: state.gameBalance + points })),

      setPlayerLevel: (level: number) => set({ playerLevel: level }),

      updateLevelProgress: (progress: number) => set({ levelProgress: progress }),
    }),
    { name: 'gameStore' },
  ),
)
