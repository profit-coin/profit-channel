import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { get, post } from '@/http/http';

export interface PublicChannel {
  telegramId: number;
  slug: string;
  title: string;
  description: string | null;
  avatar: string | null;
  members: number;
  author: string;
}

export const useFindChannels = () => useQuery({
  queryKey: ['findChannels'],
  queryFn: async () => {
    const channels = await get<PublicChannel[]>('v1/studio/channels');
    return channels;
  }
});

export interface InternalGameChannel {
  telegramId: number;
  balance: number;
  player: string;
  author: string;
  title: string;
  avatar: string | null;
  cooldown: number;
  periodLimit: number;
  leftPeriodLimit: number;
  lastCooldownResetTime: Date;
}

export const usePlayerChannels = () => useQuery({
  queryKey: ['playerChannels'],
  queryFn: async () => {
    const channels = await get<InternalGameChannel[]>('v1/game/channels/player');
    return channels;
  }
});

interface AddChannelToFavoritesPayload {
  channelTelegramId: number;
}

export const useAddChannelToFavoritesMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<InternalGameChannel | null, unknown, AddChannelToFavoritesPayload>({
    mutationFn: async (data) => {
      const channel = await post<InternalGameChannel | null>( `v1/game/channels/${data.channelTelegramId}/favorite`, {});
      return channel;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['findChannels']});
      queryClient.invalidateQueries({ queryKey: ['playerChannels']});
    }
  });
}

export const usePlayerChannel = (channelTelegramId: number) => useQuery({
  queryKey: ['playerChannel', channelTelegramId],
  queryFn: async () => {
    const channel = await get<InternalGameChannel>(`v1/game/channels/${channelTelegramId}`);
    return channel;
  }
});
