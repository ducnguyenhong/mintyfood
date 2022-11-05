import axios from 'axios';
import Cookies from 'js-cookie';

interface ApiConfig {
  url: string;
  method?: 'GET' | 'POST';
  params?: any;
  headers?: Record<string, unknown>;
  baseURL?: string;
}

const API = {
  request: (config: ApiConfig) => {
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
  }

  // upload: (config) => {
  //   const { file, type, url } = config;
  //   if (!file) {
  //     return Promise.resolve(null);
  //   }

  //   const urlUpload = url || `${process.env.REACT_APP_STOCKBOOK_CDN}/api/image_uploader?type=${type}`;
  //   const formData = new FormData();
  //   formData.append('file', file);
  //   let newHeaders = {
  //     'content-type': 'multipart/form-data'
  //   };
  //   if (this.accessToken) {
  //     newHeaders.Authorization = `Bearer ${this.accessToken}`;
  //   }

  //   const configApi = {
  //     headers: newHeaders
  //   };

  //   return axios
  //     .post(urlUpload, formData, configApi)
  //     .then((response) => response.data)
  //     .catch((error) => {
  //       if (error?.response?.status === 413) {
  //         return Promise.reject(new Error('Lỗi: Kích thước file tải lên quá lớn'));
  //       }

  //       if (error?.response?.data) {
  //         const { message } = error.response.data;
  //         return Promise.reject(message ? new Error(message) : error);
  //       }
  //       return Promise.reject(error);
  //     });
  // };
};

export default API;
