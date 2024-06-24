import { useMutation, useQuery } from '@tanstack/react-query';
import { InternalUser } from './auth';
import { get, post } from '@/http/http';

export const useCreateUserMutation = () => {
  return useMutation<InternalUser | null>({
    mutationFn: async () => {
      const user = await post('v1/game/user', {});
      return user;
    }
  });
}

export const useUserBalance = () => {
  return useQuery({
    queryKey: ['balance'],
    queryFn: async () => {
      let balance = 0;
      try {
        balance = await get<number>('v1/game/user/balance');
      } catch (error) {
        console.log(error);
        return 0;
      }

      return balance;
    },
    refetchInterval: 3000
  });
}

