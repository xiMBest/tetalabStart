import restify from 'restify';
import news from './news.js';

const server = restify.createServer();

server.get('/news', async (req, res) => {
  const latestNews = await news();
  res.json(latestNews);
});

server.listen(9000, function() {
  console.log('%s listening at %s', server.name, server.url);
});