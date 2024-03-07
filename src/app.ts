import express from 'express';
import bodyParser from 'body-parser';
import indexRouter from './router';
import prisma from './prisma';

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/', indexRouter);

async function start() {
    try {
        app.listen(3000, () => console.log('Server started on port 3000'));
        prisma.$connect();
    } catch (err) {
        console.error(err);
    }
}
start();
