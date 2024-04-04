/* eslint-disable @typescript-eslint/no-unused-vars */
import { APP_ERROR } from '../../common/errors';
import { UsersService } from '../users/services';
import { AuthLoginDto, AuthRegisterDto } from './dto';
import jwt from 'jsonwebtoken';

export class AuthService {
  static async register(data: AuthRegisterDto) {
    const userExists = await UsersService.getUserByEmail(data.email);
    if (userExists) {
      return APP_ERROR.USER_EXISTS;
    }
    const createdUser = await UsersService.createUser(data);
    return { message: 'User created' };
  }

  static async login(data: AuthLoginDto) {
    const user = await UsersService.getUserByEmail(data.email);
    if (!user) {
      return APP_ERROR.USER_NOT_EXISTS;
    }
    const { password, ...userWithoutPass } = user;
    const secret = process.env.JWT_SECRET;
    if (secret) {
      const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
      return { user: userWithoutPass, token };
    } else {
      return 'Ошибка: отсутствует секретный ключ JWT';
    }
  }
}
