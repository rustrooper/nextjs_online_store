import { LIMIT } from '@/constants/pagination';

type Brand = string | null | undefined;

export const getRacketKey = (page: number, brand: Brand) => {
  return brand
    ? `products?page=${page}&brand=${brand}&limit=${LIMIT}`
    : `products?page=${page}&limit=${LIMIT}`;
};
