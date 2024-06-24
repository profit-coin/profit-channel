import appConfig from '@/config/appConfig';
import axios from 'axios';
import QueryString from 'qs';

const contentTypeHeader = 'Content-Type';
const applicationJson = 'application/json';

interface BaseRequestParams {
  queryParams?: string | object;
  headers?: Record<string, string>;
}

const getQueryParams = (queryParams?: string | object) => {
  let query = '';
  if (typeof queryParams === 'string') {
    query = `?${queryParams}`;
  } else if (typeof queryParams === 'object') {
    query = `?${QueryString.stringify(queryParams, { arrayFormat: 'repeat' })}`;
  }
  return query;
};

export const get = async <T = any>(path: string, { queryParams, headers }: BaseRequestParams = {}) => {
  const query = getQueryParams(queryParams);
  const token = window.Telegram.WebApp.initData;
  const response = await axios(`${appConfig.apiBaseUrl}/${path}${query}`, {
    headers: {
      ...headers,
      [contentTypeHeader]: applicationJson,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data as T;
};

export const post = async <T = any, B = any>(path: string, body: B, { queryParams, headers }: BaseRequestParams = {}) => {
  const query = getQueryParams(queryParams);
  const token = window.Telegram.WebApp.initData;
  const response = await axios.post(`${appConfig.apiBaseUrl}/${path}${query}`, body, {
    headers: {
      ...headers,
      [contentTypeHeader]: applicationJson,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data as T;
}

export const put = async <T = any, B = any>(path: string, body: B, { queryParams, headers }: BaseRequestParams = {}) => {
  const query = getQueryParams(queryParams);
  const token = window.Telegram.WebApp.initData;
  const response = await axios.put(`${appConfig.apiBaseUrl}/${path}${query}`, body, {
    headers: {
      ...headers,
      [contentTypeHeader]: applicationJson,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data as T;
}

export const remove = async <T = any>(path: string, { queryParams, headers }: BaseRequestParams = {}) => {
  const query = getQueryParams(queryParams);
  const token = window.Telegram.WebApp.initData;
  const response = await axios.delete(`${appConfig.apiBaseUrl}/${path}${query}`, {
    headers: {
      ...headers,
      [contentTypeHeader]: applicationJson,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return response.data as T;
}
