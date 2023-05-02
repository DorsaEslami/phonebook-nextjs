import axios from "axios";

const axiosInstance = axios.create();
axios.interceptors.request.use(function (config: any) {
  config.headers.accept = 'text/plain';
  config.headers['Content-Type'] = 'application/json';
  let token = localStorage.getItem('token');
  if (token === null) {
    window.location.replace('/');
  }
  return config;
}, function (error: any) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401 || error.response.status === 403) {
    localStorage.clear();
    window.location.replace('/');
  }
  return Promise.reject(error);
});
export default axiosInstance;