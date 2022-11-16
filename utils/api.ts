import axios from 'axios';
import Cookies from 'js-cookie';

interface RequestConfig {
  url: string;
  method?: 'GET' | 'POST';
  params?: any;
  headers?: Record<string, unknown>;
  baseURL?: string;
}

const API = {
  request: (config: RequestConfig) => {
    const { method = 'GET', url, params, headers, baseURL } = config;

    const accessToken = Cookies.get('access-token');

    let newHeaders: any = { 'Content-Type': 'application/json' };
    if (accessToken) {
      newHeaders.Authorization = `Bearer ${accessToken}`;
    }
    if (headers) {
      newHeaders = { ...newHeaders, ...headers };
    }

    const requestConfig: any = {
      method,
      url,
      baseURL,
      headers: newHeaders,
      timeout: 100000,
      timeoutErrorMessage: 'Quá thời gian chờ dịch vụ'
    };

    if (params) {
      if (typeof method === 'string' && method.toLowerCase().trim() === 'get') {
        requestConfig.params = params;
      } else {
        requestConfig.data = params;
      }
    }

    return axios(requestConfig)
      .then((response) => response.data)
      .catch((error) => Promise.reject(error?.response?.data || error));
  },

  upload: (file: File | Blob) => {
    if (!file) {
      return Promise.resolve(null);
    }
    const fileReal = new File([file], 'file');
    const formData = new FormData();
    formData.append('file', fileReal);
    const configApi = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    return axios
      .post('/api/upload', formData, configApi)
      .then((response) => response.data)
      .catch((error) => {
        if (error?.response?.data) {
          const { message } = error.response.data;
          return Promise.reject(message ? new Error(message) : error);
        }
        return Promise.reject(error);
      });
  }
};

export default API;
