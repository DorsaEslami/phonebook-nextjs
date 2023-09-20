import originalAxios, { AxiosInstance } from "axios";
import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";


const axios = (): AxiosInstance => {

  const axiosInstance = originalAxios.create();
  axiosInstance.interceptors.request.use(async function (config: any) {
    config.headers.accept = 'text/plain';
    config.headers['Content-Type'] = 'application/json';
    return config;
  }, function (error: any) {
    return Promise.reject(error);
  });

  axiosInstance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response?.status === 401 || error.response?.status === 403) {
      signOut({ redirect: true, callbackUrl: '/' });
    }
    return Promise.reject(error);
  });
  return axiosInstance;
}

export default axios;

