import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import appConfig from '@/config/appConfig';
import { InternalUser } from './auth';

interface CreateUserPayload {
  telegramId: number;
  username: string;
  firstName?: string;
  lastName?: string;
  language?: string;
}

export const useCreateUserMutation = () => {
  return useMutation<InternalUser | null, unknown, CreateUserPayload>({
    mutationFn: async (data) => {
      const response = await axios.post(`${appConfig.apiBaseUrl}/v1/studio/user`, data);
      return response.data;
    }
  });
}
