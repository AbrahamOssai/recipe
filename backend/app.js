import '@babel/polyfill';
import express, { Router } from 'express';
import recipeRoutes from './routes/recipes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const CONNECTION_STRING = process.env.CONNECTION_STRING;

mongoose
  .connect(CONNECTION_STRING)
  .then(() => {
    console.log('Successfully Connected to Mongodb Atlas');
  })
  .catch(() => {
    console.log('Unable to connect');
    console.error(error);
  });

app.use((req, res, next) => {
  // res.header vs res.setHeader??
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Content, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/recipes', recipeRoutes);

app.get('/', (req, res) =>
  res.status(200).json({
    status: '200',
    message: 'Made it to the Root. Welcome to Recipies Api'
  })
);

app.use((req, res) =>
  res.status(400).send({
    message: 'Sorry that route/method doesnt exist'
  })
);

export default app;
