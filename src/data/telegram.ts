export interface TelegramUser {
  id: number;
  username: string;
  last_name: string;
  first_name: string;
  is_premium: boolean;
  language_code: string;
  allows_write_to_pm: boolean;
}
