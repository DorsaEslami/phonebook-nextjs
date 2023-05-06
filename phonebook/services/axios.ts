import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const axiosInstance = axios.create();
axios.interceptors.request.use(async function (config: any) {
  const session = await getSession();
  config.headers.accept = 'text/plain';
  config.headers['Content-Type'] = 'application/json';
  let token = session?.user.token;
  if (token === null) {
    signOut();
  }
  return config;
}, function (error: any) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401 || error.response.status === 403) {
    signOut();
  }
  return Promise.reject(error);
});
export default axiosInstance;