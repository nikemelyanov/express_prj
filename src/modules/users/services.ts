import prisma from "../../prisma";
import { CreateUserDto, UpdateUserDto } from "./dto";

export class UsersService {
    static async createUser(user: CreateUserDto) {
        const createdUser = await prisma.user.create({ data: user });
        const { password, ...userWithoutPassword } = createdUser;
        return userWithoutPassword;
    }

    static async getUsers() {
        return await prisma.user.findMany();
    }

    static async getUserByEmail(email: string) {
        return await prisma.user.findUnique({ where: { email: email } });
    }

    static async getUserById(id: number) {
        return await prisma.user.findUnique({ where: { id: id } });
    }

    static async updateUser(userId: number, user: UpdateUserDto) {
        return await prisma.user.update({ where: { id: userId }, data: user });
    }

    static async deleteUser(userId: number) {
        return await prisma.user.delete({ where: { id: userId } });
    }
}
