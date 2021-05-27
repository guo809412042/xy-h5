import axios from 'axios';

// 需要在package.json 添加代理


// 域名配置
const baseURL = process.env.NODE_ENV === "production" ? '' : ''
const timeout = ''
const request = axios.create({
  baseURL: baseURL,
  timeout: timeout,
  // headers: headers,
})

// 请求拦截
request.interceptors.request.use(config => {
  return config;
  },error => {
  return Promise.reject(error);
});

// 响应拦截
request.interceptors.response.use(response => {

  return response.data;
  },error => {
  return Promise.reject(error);
});

export default request;