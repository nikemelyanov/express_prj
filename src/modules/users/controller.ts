import { Request, Response } from "express";
import { UsersService } from "./services";

export class UsersController {
    static async getUsers(req: Request, res: Response) {
        const users = await UsersService.getUsers()
        res.json(users) ;
    }

    static async createUser(req: Request, res: Response) {
        const user = {
            name: req.body.name,
            email: req.body.email
        };
        const newUser = await UsersService.createUser(user);
        res.json(newUser);
    }
}
