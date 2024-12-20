import express from 'express';
import 'dotenv/config';
import { router } from './routes/index';

const app = express();

app.use(express.json());
app.use(router);

export {app};