import { UsersService } from "../users/services";
import { AuthLoginDto, AuthRegisterDto } from "./dto";
import jwt from "jsonwebtoken";

export class AuthService {
    static async register(user: AuthRegisterDto) {
        const userExists = await UsersService.getUserByEmail(user.email);
        if (userExists) {
            throw new Error('User already exists');
        }
        const createdUser = await UsersService.createUser(user);
        const token = jwt.sign({ id: createdUser.id }, 'secret', { expiresIn: '1h' });
        return { user: createdUser, token };
    }

    static async login(user: AuthLoginDto) {
        return await UsersService.getUserByEmail(user.email);
    }
}
