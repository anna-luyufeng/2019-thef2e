import axios from "axios";

axios.defaults.baseURL = "https://challenge.thef2e.com/api/thef2e2019/stage6/";

axios.interceptors.request.use(
  config => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization:
        "Bearer fPqqVrcKd0wWdPzZgZeMgAcRANCgdzr92Za2G18Relh3ze5MKNkSqglZMxYh"
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // Do something with response data
    if (response.data.success) {
      return response.data;
    }

    return false;
  },
  error => {
    // Do something with response error
    // TODO: errorHandler
    return Promise.reject(error);
  }
);

export default axios;
