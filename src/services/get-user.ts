import { cookies } from 'next/headers';

import { BASE_API_URL } from '@/constants/api';
import { ServiceResponse } from '@/types/response';
import { User } from '@/types/user';

export const getUser = async (): ServiceResponse<User> => {
  try {
    const cookieStore = await cookies();

    const res = await fetch(`${BASE_API_URL}/auth/user`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    if (res.status === 401) {
      return { isError: false, data: undefined };
    }

    if (!res.ok) {
      return { isError: true, data: undefined };
    }

    const { user } = await res.json();
    return { isError: false, data: user };
  } catch {
    return { isError: true, data: undefined };
  }
};
