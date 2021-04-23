import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create();
export const BASE_URL = process.env.REACT_APP_BASE_API_URL;
instance.interceptors.request.use((config: AxiosRequestConfig) => {
  return {
    ...config,
    url: `${BASE_URL}${config.url}`,
    withCredentials: true
  };
});

export default instance;
