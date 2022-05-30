import express from "express";
import path from 'path';
import {fileURLToPath} from 'url';
import api from './api.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assets'));
app.use('/slds', express.static(__dirname + '/node_modules/@salesforce-ux/design-system/assets'));

app.get('/', async (req, res) => {
  const news = await api.news();
  res.render('index', { news });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
