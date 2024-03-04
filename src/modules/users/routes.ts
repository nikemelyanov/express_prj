import express, { Router } from 'express';
import { UsersController } from './controller';

const router: Router = express.Router();

router.post('/', UsersController.createUser);
router.get('/', UsersController.getUsers);
router.get('/:userId', UsersController.getUser);
router.patch('/:userId', UsersController.updateUser);
router.delete('/:userId', UsersController.deleteUser);

export default router;
