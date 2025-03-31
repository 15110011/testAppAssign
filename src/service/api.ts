import {apiRequest} from './NetworkService';

export const loginApi = ({
  email,
  password,
  captcha,
}: {
  email: string;
  password: string;
  captcha: string;
}) => {
  return apiRequest({
    baseURL: 'https://sso-backend.tokenize-dev.com',
    path: '/auth/login',
    method: 'POST',
    data: {
      email,
      password,
      captcha,
    },
  });
};

export const getSummariesApi = () => {
  return apiRequest({
    baseURL: 'https://api.tokenize-dev.com',
    path: '/public/v1/market/get-summaries',
    method: 'GET',
  });
};

export const getMarketsApi = () => {
  return apiRequest({
    baseURL: 'https://api.tokenize-dev.com',
    path: '/api-sso/market/getmarkets',
    method: 'GET',
  });
};
