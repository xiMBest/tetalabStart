import axios from 'axios';
import config from './config.js';

export default () => axios({
  method: 'GET',
  baseURL: config.newsApi.host,
  url: '/v2/top-headlines',
  params: config.newsApi.requestParams
}).then(r => r.data.articles);
