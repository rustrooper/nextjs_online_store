import { BASE_API_URL } from '@/constants/api';
import { Brand } from '@/types/brand';
import { ServiceResponse } from '@/types/response';

export const getBrands = async (): ServiceResponse<Brand[]> => {
  try {
    const res = await fetch(`${BASE_API_URL}/brands`);

    if (!res.ok) {
      return { isError: true, data: undefined };
    }

    const brands = await res.json();
    return { isError: false, data: brands };
  } catch {
    return { isError: true, data: undefined };
  }
};
