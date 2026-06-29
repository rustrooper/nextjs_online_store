import { BASE_API_URL } from '@/constants/api';
import { Racket } from '@/types/racket';
import { ServiceResponse } from '@/types/response';
import { cookies } from 'next/headers';

export const getTop10 = async (): ServiceResponse<Racket[]> => {
  try {
    const cookieStore = await cookies();
    const res = await fetch(`${BASE_API_URL}/top-10`, {
      next: {
        tags: ['top-10'],
        revalidate: 3600,
      },
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    if (!res.ok) {
      return { isError: true, data: undefined };
    }

    const data = await res.json();
    return { isError: false, data };
  } catch {
    return { isError: true, data: undefined };
  }
};
