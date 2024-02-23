export type ResponseWithResult<T> = {
  result: T;
};

export type ResponseWithMessage<T> = {
  message: string;
} & T;
