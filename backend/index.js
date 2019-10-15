import '@babel/polyfill';
import express, {Router} from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT;

app.use((req, res, next) => {

  // res.header vs res.setHeader??
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Content, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api', routes({ Router }));

app.get('/', (req, res) => res.status(200).json({ 
  status: '200',
  message: 'Made it to the Root. Welcome to Recipies Api'
}));

app.use((req, res) => res.status(400).send({
  message: 'Sorry that route/method doesnt exist',
}));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

export default app;
