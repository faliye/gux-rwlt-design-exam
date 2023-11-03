import axios from 'axios';

// baseURL
axios.defaults.baseURL = 'https://opendata.resas-portal.go.jp/api/v1';
// timeout
axios.defaults.timeout = 10000;
// request interceptors
axios.interceptors.request.use(
  (config: any) => {
    return {
      ...config,
      headers:{
        'x-api-key': 'sti4aCf6JAliQkmewbleLphIx0uTTUk7TzPZzruX'
      }
    };
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// interceptors
axios.interceptors.response.use(
  (response: any) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // error code
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          break;
        case 403:
          setTimeout(() => {}, 1000);
          break;

        // 404
        case 404:
          break;

        default:
      }
      return Promise.reject(error.response);
    }
  },
);

export function get(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}