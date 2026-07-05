import { LIMIT } from '@/constants/pagination';

export const getRacketKey = (page: number) => {
  return `products?page=${page}&limit=${LIMIT}`;
};
