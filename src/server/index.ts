import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import { join } from 'path';
import { contactRouter } from './components/contact';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(express.static(join(__dirname, '../reallygoodsoftwarellc-ui')));
app.use('/assets', express.static(join(__dirname, '../reallygoodsoftwarellc-ui/assets')));

app.use('/api/contact', contactRouter);

app.get('*', (req, res) => {
  return res.sendFile(join(__dirname, '../reallygoodsoftwarellc-ui/index.html'))
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Really Good Software LLC Website listening on port ' + port);
});
