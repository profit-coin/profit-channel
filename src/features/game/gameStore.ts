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
  sendAccumulatedPoints: () => void
  initializeBalance: () => void
}

type ApiResponse = {
  gameBalance: number
}

const fetchInitialBalance = async (): Promise<ApiResponse> => {
  // TODO: Implement fetching initial balance from the API
  const response = await fetch('/api/initial-balance', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch initial balance')
  }

  return response.json()
}

const sendPointsToApi = async (points: number): Promise<ApiResponse> => {
  // TODO: Implement sending points to the API
  const response = await fetch('/api/endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ points }),
  })

  if (!response.ok) {
    throw new Error('Failed to send points to API')
  }

  return response.json()
}

export const useGameStore = create<GameState>()(
  devtools(
    (set, get) => ({
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

      sendAccumulatedPoints: async () => {
        const { accumulatedPoints } = get()
        if (accumulatedPoints > 0) {
          set({ isLoading: true, error: null, accumulatedPoints: 0 })
          try {
            const data = await sendPointsToApi(accumulatedPoints)
            set({
              gameBalance: data.gameBalance,
              isLoading: false,
            })
          } catch (error) {
            let errorMessage = 'An unknown error occurred'
            if (error instanceof Error) {
              errorMessage = error.message
            }
            set({
              isLoading: false,
              error: errorMessage,
            })
          }
        }
      },

      initializeBalance: async () => {
        try {
          const data = await fetchInitialBalance()
          set({ gameBalance: data.gameBalance })
        } catch (error) {
          let errorMessage = 'An unknown error occurred'
          if (error instanceof Error) {
            errorMessage = error.message
          }
          set({
            error: errorMessage,
          })
        }
      },
    }),
    { name: 'gameStore' },
  ),
)

setInterval(() => {
  const { lastUpdateTime, accumulatedPoints, sendAccumulatedPoints } = useGameStore.getState()
  if (accumulatedPoints > 0 && Date.now() - lastUpdateTime > 1000) {
    sendAccumulatedPoints()
  }
}, 1000)
