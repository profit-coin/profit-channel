import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type GameState = {
  gameBalance: number
  playerLevel: number
  levelTotal: number
  levelProgress: number
  accumulatedPoints: number
  lastUpdateTime: number
  isLoading: boolean
  error: string | null
  setPlayerLevel: (level: number) => void
  updateLevelProgress: (progress: number) => void
  accumulatePoints: (points: number) => void
  clearError: () => void
}

export const useGameStore = create<GameState>()(
  devtools(
    set => ({
      gameBalance: 0,
      playerLevel: 4,
      levelTotal: 3000000,
      levelProgress: 1459384,
      accumulatedPoints: 0,
      lastUpdateTime: Date.now(),
      isLoading: false,
      error: null,

      setPlayerLevel: (level: number) => set({ playerLevel: level }),

      updateLevelProgress: (progress: number) => set({ levelProgress: progress }),

      accumulatePoints: (points: number) => {
        set(state => ({
          gameBalance: state.gameBalance + points,
          accumulatedPoints: state.accumulatedPoints + points,
          lastUpdateTime: Date.now(),
        }))
      },

      clearError: () => set({ error: null }),
    }),
    { name: 'gameStore' },
  ),
)
