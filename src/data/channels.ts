import appConfig from '@/config/appConfig';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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
  queryKey: ['channels', 'search'],
  queryFn: async () => {
    const response = await axios.get<PublicChannel[]>(`${appConfig.apiBaseUrl}/v1/studio/channels`);
    return response.data;
  }
});
