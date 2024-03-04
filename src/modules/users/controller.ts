import { Request, Response } from "express";
import { UsersService } from "./services";

export class UsersController {
    static async createUser(req: Request, res: Response) {
        const user = {
            name: req.body.name,
            email: req.body.email,
        };
        const newUser = await UsersService.createUser(user);
        res.json(newUser);
    }

    static async getUsers(req: Request, res: Response) {
        const users = await UsersService.getUsers();
        res.json(users);
    }

    static async getUser(req: Request, res: Response) {
        const userid = Number(req.params["userId"]);
        const user = await UsersService.getUser(userid);
        if (!user) return res.status(404).send("user not found");
        res.json(user);
    }

    static async updateUser(req: Request, res: Response) {
        const userid = Number(req.params["userId"]);
        const user = {
            name: req.body.name,
            email: req.body.email,
        };
        const updatedUser = await UsersService.updateUser(userid, user);
        if (!updatedUser) return res.status(404).send("user not found");
        res.json(updatedUser);
    }

    static async deleteUser(req: Request, res: Response) {
        const userid = Number(req.params["userId"]);
        const deletedUser = await UsersService.deleteUser(userid);
        if (!deletedUser) return res.status(404).send("user not found");
        res.json(deletedUser);
    }
}
