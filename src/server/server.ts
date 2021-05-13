import * as express from 'express';
import * as path from 'path';
import routes from './routes';
import { configurePassport } from './middlewares/passport-strategies';
import * as morgan from 'morgan';

const app = express();

configurePassport(app);
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.get('*', (req, res) => res.sendFile((path.join(__dirname, '../public/index.html'))));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
