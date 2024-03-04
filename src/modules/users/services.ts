import prisma from "../../prisma";
import { CreateUserDto, UpdateUserDto } from "./dto";

export class UsersService {
    static async createUser(user: CreateUserDto) {
        return await prisma.user.create({ data: user });
    }

    static async getUsers() {
        return await prisma.user.findMany();
    }

    static async getUser(userId: number) {
        return await prisma.user.findUnique({ where: { id: userId } });
    }

    static async updateUser(userId: number, user: UpdateUserDto) {
        return await prisma.user.update({ where: { id: userId }, data: user });
    }

    static async deleteUser(userId: number) {
        return await prisma.user.delete({ where: { id: userId } });
    }
}
