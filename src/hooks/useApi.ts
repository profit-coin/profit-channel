import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { IChannelItem, IGameBalance, IGameItem, IGameSettings } from '@/features/channel/types'
import axiosClient from '../utils/axiosClient'

const fetchBalance = async (): Promise<IGameBalance> => {
  const response = await axiosClient.get('/api/balance')
  return response.data
}

const fetchSettings = async (): Promise<IGameSettings> => {
  const response = await axiosClient.get('/api/settings')
  return response.data
}

const fetchChannels = async (): Promise<IChannelItem[]> => {
  const response = await axiosClient.get('/api/channels')
  return response.data
}

const fetchGameById = async (id: string): Promise<IGameItem> => {
  const response = await axiosClient.get(`/api/channels/game/${id}`)
  return response.data
}

const sendPoints = async (points: number): Promise<IGameBalance> => {
  const response = await axiosClient.post('/game/points', { points })
  return response.data
}

export const useBalance = () => {
  return useQuery<IGameBalance, Error>({
    queryKey: ['balance'],
    queryFn: fetchBalance,
  })
}

export const useChannels = () => {
  return useQuery<IChannelItem[], Error>({
    queryKey: ['settings'],
    queryFn: fetchChannels,
  })
}

export const useSettings = () => {
  return useQuery<IGameSettings, Error>({
    queryKey: ['settings'],
    queryFn: fetchSettings,
  })
}

export const useGameById = (id: string) => {
  return useQuery<IGameItem, Error>({
    queryKey: ['game', id],
    queryFn: () => fetchGameById(id),
  })
}

export const useSendPoints = () => {
  const queryClient = useQueryClient()
  return useMutation<IGameBalance, Error, number>({
    mutationFn: sendPoints,
    onSuccess: data => {
      queryClient.setQueryData(['balance'], data)
    },
  })
}
