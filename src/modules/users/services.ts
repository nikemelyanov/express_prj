import prisma from "../../prisma";
import { CreateUserDto } from "./dto";

export class UsersService {
    static async getUsers() {
        return await prisma.user.findMany();
    }

    static async createUser(user: CreateUserDto) {
        return await prisma.user.create({ data: user });
    }
}
