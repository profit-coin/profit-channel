import { post } from '@/http/http';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface AddCoinsPayload {
  amount: number;
  targetChannelTelegramId: number;
}

export const useAddCoinsMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: AddCoinsPayload) => {
      const data = await post('v1/coin/add', payload)
      console.log(data);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['balance'] });
    },
  });
}
