import { post } from '@/http/http';

export interface InternalUser {
  id: number;
  telegramId: number;
  username: string;
  firstName: string;
  lastName: string;
  balance: number;
}

const verifyTelegramUser = async (initData: string) => {
  const user = await post<InternalUser | null>(`v1/game/auth`, { initData });
  return user;
};

export const useInternalAuth = (initData: string) => {
  return verifyTelegramUser(initData);
};
