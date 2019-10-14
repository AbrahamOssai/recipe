import '@babel/polyfill';
import express, {Router} from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT;

app.use('/api', routes({ Router }));
app.get('/', (req, res) => res.status(200).json({ 
  status: '200',
  message: 'Made it to the Root. Welcome to Recipies Api' 
}));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

export default app;
