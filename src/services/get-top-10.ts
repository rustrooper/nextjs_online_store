import { BASE_API_URL } from '@/constants/api';
import { Racket } from '@/types/racket';
import { ServiceResponse } from '@/types/response';

export const getTop10 = async (): ServiceResponse<Racket[]> => {
  const res = await fetch(`${BASE_API_URL}/top-10`);

  if (!res.ok) {
    return { isError: true, data: undefined };
  }

  const data = await res.json();
  return { isError: false, data };
};
