"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const services_1 = require("./services");
class UsersController {
    static async getUsers(req, res) {
        const users = await services_1.UsersService.getUsers();
        res.json(users);
    }
    static async createUser(req, res) {
        const user = {
            name: req.body.name,
            email: req.body.email
        };
        const newUser = await services_1.UsersService.createUser(user);
        res.json(newUser);
    }
}
exports.UsersController = UsersController;
