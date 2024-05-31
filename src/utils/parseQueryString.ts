import type { InitData, User } from '../shared/types/user-data.ts';

export function parseQueryString(queryString: string): InitData {
    const params = new URLSearchParams(queryString);

    const user: User = JSON.parse(params.get('user') || '{}');

    return {
        query_id: params.get('query_id') ?? '',
        user: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username || '',
            language_code: user.language_code,
            allows_write_to_pm: user.allows_write_to_pm,
        },
        auth_date: parseInt(params.get('auth_date') || '0', 10),
        hash: params.get('hash') ?? '',
    };
}