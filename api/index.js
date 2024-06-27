const express = require('express');
require('dotenv').config();

const app = express();

const { startDB } = require('../src/db/dbConfig');

startDB();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Working fine' });
});

if (process.env.NODE_ENV === 'development') {
  app.listen(process.env.PORT, () => {
    console.log(`server is running on localhost:${process.env.PORT}`);
  });
}
module.exports = app;

// app.use(express.json({ limit: '5000mb' }));
// app.use(express.urlencoded({ limit: '5000mb', extended: true }));

// app.use(
//   cors({
//     origin: ['http://localhost:3000', 'https://coin-rise.vercel.app'],
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // enable set cookie
//     allowedHeaders:
//       'Origin, X-Requested-With, Content-Type, Accept, Authorization',
//   })
// );

// app.options('*', cors());

// app.use(helmet());
// app.use(limiter);
// app.use('/api', apiRoutes);
// app.use('/auth', authRoutes);
// app.use(globalErrorHandler);

// handle invalid routes
// app.all('*', (req, res, next) => {
//   next(new ErrorHandler(`URL ${req.originalUrl} not found on the server`, 404));
// });

// app.use(globalErrorHandler);

// app.listen(environmentVariables.APP_PORT, () => {
//   console.log(`server running on localhost:${environmentVariables.APP_PORT}`);
// });
