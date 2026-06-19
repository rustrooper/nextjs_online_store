export type ServiceResponse<T> = Promise<{
  isError: boolean;
  data?: T;
}>;
