export default {
  newsApi: {
    host: 'https://newsapi.org',
    requestParams: {
      country: 'ua',
      apiKey: process.env.API_KEY || '528f3c8750e84a768d420904823cfec0'
    }
  }
}