import { BASE_API_URL } from '@/constants/api';
import { Racket } from '@/types/racket';
import { ServiceResponse } from '@/types/response';

export const getRacketMetadataById = async (id: string): ServiceResponse<Racket> => {
  try {
    const res = await fetch(`${BASE_API_URL}/meta/product/${id}`);

    if (res.status === 404) {
      return { isError: false, data: undefined };
    }

    if (!res.ok) {
      return { isError: true, data: undefined };
    }

    const { product } = await res.json();
    return { isError: false, data: product };
  } catch {
    return { isError: true, data: undefined };
  }
};
