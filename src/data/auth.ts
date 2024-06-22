import appConfig from '@/config/appConfig';
import axios from 'axios';

export interface InternalUser {
  id: number;
  telegramId: number;
  username: string;
  firstName: string;
  lastName: string;
  balance: number;
}

const verifyTelegramUser = async (initData: string) => {
  const response = await axios.post<InternalUser | null>(`${appConfig.apiBaseUrl}/v1/studio/auth`, { initData });
  return response.data;
};

export const useInternalAuth = (initData: string) => {
  return verifyTelegramUser(initData);
};
