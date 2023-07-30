export interface IResponse<T = null> {
  data: T;
  message: string;
  messageCode: string;
  success: boolean;
}
