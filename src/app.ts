import express from 'express';
import bodyParser from 'body-parser';
import router from './router';
import prisma from './prisma';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.use('/api/v1/', router);

async function start() {
  try {
    app.listen(port, () => console.log(`Server started on port ${port}`));
    prisma.$connect();
  } catch (err) {
    console.error(err);
  }
}
start();
