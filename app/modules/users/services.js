"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UsersService {
    static async getUsers() {
        return await prisma_1.default.user.findMany();
    }
    static async createUser(user) {
        return await prisma_1.default.user.create({ data: user });
    }
}
exports.UsersService = UsersService;
