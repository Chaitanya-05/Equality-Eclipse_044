import cookieParser from 'cookie-parser';
import cors from 'cors';
import { config } from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import errorMiddleware from './middlewares/error.middleware.js';
import courseRoutes from './routes/course.Routes.js';
import miscRoutes from './routes/miscellanous.routes.js';
import paymentRoutes from './routes/payment.routes.js';
import userRoutes from './routes/user.Routes.js';

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  'http://localhost:5173', // development origin
  'https://learning-management-system-roan.vercel.app', // production origin
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(morgan('dev'));

app.use('/ping', function (_req, res) {
  res.send('Pong');
});

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/course', courseRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1', miscRoutes);
app.all('*', (_req, res) => {
  res.status(404).send('OOPS!!  404 page not found ');
});
app.use(errorMiddleware);

export default app;
