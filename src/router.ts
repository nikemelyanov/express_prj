import express, { Router } from 'express';
import usersRouter from './modules/users/routes';

const router: Router = express.Router();

router.use('/users', usersRouter)

export default router