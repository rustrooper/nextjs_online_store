import { BASE_API_URL } from '@/constants/api';
import { ServiceResponse } from '@/types/response';
import { Racket } from '@/types/racket';
import { cookies } from 'next/headers';

interface Params {
  page: number;
  limit: number;
  brand?: string;
}

export const getRackets = async ({ page, limit, brand }: Params): ServiceResponse<Racket[]> => {
  try {
    const cookieStore = await cookies();
    const params = new URLSearchParams({
      page: String(page),
      limit: String(limit),
    });
    if (brand) {
      params.set('brand', brand);
    }
    const res = await fetch(`${BASE_API_URL}/products?${params.toString()}`, {
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
