import express, { Router } from 'express';
import { UsersController } from './controller';

const router: Router = express.Router();

router.get('/', UsersController.getUsers);
router.post('/', UsersController.createUser);

export default router;
