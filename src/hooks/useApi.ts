import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Balance, Game, GameSettings } from '@/features/channel/types'
import axiosClient from '../utils/axiosClient'

const fetchBalance = async (): Promise<Balance> => {
  const response = await axiosClient.get('/api/balance')
  return response.data
}

const fetchSettings = async (): Promise<GameSettings> => {
  const response = await axiosClient.get('/api/settings')
  return response.data
}

const fetchGameById = async (id: string): Promise<Game> => {
  const response = await axiosClient.get(`/game/${id}`)
  return response.data
}

const sendPoints = async (points: number): Promise<Balance> => {
  const response = await axiosClient.post('/game/points', { points })
  return response.data
}

export const useBalance = () => {
  return useQuery<Balance, Error>({
    queryKey: ['balance'],
    queryFn: fetchBalance,
  })
}

export const useSettings = () => {
  return useQuery<GameSettings, Error>({
    queryKey: ['settings'],
    queryFn: fetchSettings,
  })
}

export const useGameById = (id: string) => {
  return useQuery<Game, Error>({
    queryKey: ['game', id],
    queryFn: () => fetchGameById(id),
  })
}

export const useSendPoints = () => {
  const queryClient = useQueryClient()
  return useMutation<Balance, Error, number>({
    mutationFn: sendPoints,
    onSuccess: data => {
      queryClient.setQueryData(['balance'], data)
    },
  })
}
