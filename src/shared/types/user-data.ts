export interface User {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
    allows_write_to_pm: boolean;
}

export interface UserLogin {
    telegramId: string;
    firstName: string;
    lastName?: string;
    username?: string;
    referral?: string
}
