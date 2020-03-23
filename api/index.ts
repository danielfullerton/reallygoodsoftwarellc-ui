import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as helmet from 'helmet';
import { join } from 'path';
import { contactRouter } from './components/contact';

const app = express();
export const appRootDir = process.env.APP_ROOT_DIR || join(__dirname, '../app-dist');

app.use(bodyParser.json());
app.get('*.*', express.static(appRootDir, { maxAge: '1d' }));
app.use(helmet());

app.use('/api/contact', contactRouter);

app.all('*', (req, res) => {
  return res.sendFile(`${appRootDir}/index.html`)
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Really Good Software LLC Website listening on port ' + port);
});
