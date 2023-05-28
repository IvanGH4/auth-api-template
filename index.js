import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';
import userRoutes from './routes/user.js';
import { notFound, errorHandler } from './middleware/error.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

const port = process.env.PORT || 8081;

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

export default app;
