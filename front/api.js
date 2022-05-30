import axios from "axios";

export default {
  news: () => axios({
    method: 'GET',
    baseURL: 'http://localhost:9000',
    url: '/news'
  }).then(r => r.data)
}