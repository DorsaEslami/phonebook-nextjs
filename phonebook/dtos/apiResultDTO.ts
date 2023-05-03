import { AxiosResponseHeaders, InternalAxiosRequestConfig, RawAxiosResponseHeaders } from "axios";

export class APIResultDTO<T>{
  data: T | undefined = undefined;
  status: number | undefined = undefined;
  statusText: string | undefined = undefined;
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders | undefined = undefined;
  config: InternalAxiosRequestConfig | undefined = undefined;
  request?: any;
}