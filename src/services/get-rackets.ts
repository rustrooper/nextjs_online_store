import { BASE_API_URL } from '@/constants/api';
import { ServiceResponse } from '@/types/response';
import { Racket } from '@/types/racket';

interface Params {
  page: number;
  limit: number;
}

export const getRackets = async ({ page, limit }: Params): ServiceResponse<Racket[]> => {
  try {
    const res = await fetch(`${BASE_API_URL}/products?page=${page}&limit=${limit}`);
    if (!res.ok) {
      return { isError: true, data: undefined };
    }
    const data = await res.json();
    return { isError: false, data };
  } catch {
    return { isError: true, data: undefined };
  }
};
