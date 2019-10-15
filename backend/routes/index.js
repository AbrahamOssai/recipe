// import authRoute from './auth';
import recipiesRoute from './recipies';

function routes({ Router }) {
  const router = Router();

  router.get('/', (req, res, next) => {
    res.status(200);
    res.json({
      status: '200',
      message: 'Welcome to recipies routes'
    });
  });

  // router.use('/recipies', recipiesRoute({  }));

  return router;
}

export default routes;
