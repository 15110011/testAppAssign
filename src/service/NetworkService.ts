import axios, {Method} from 'axios';

interface ApiRequestProps {
  baseURL: string;
  path: string;
  method?: Method;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=utf-8',
    'user-agent': 'Android;1.15.0',
    'TOK-DEVICE-ID': 'ea278b7741967a5e',
  },
});

export const apiRequest = async ({
  baseURL,
  path,
  method = 'get',
  data,
  params,
  headers = {},
}: ApiRequestProps) => {
  try {
    const response = await axiosInstance.request({
      baseURL,
      url: path,
      method,
      data,
      params,
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
