import { Request, Response } from "express";
import { UsersService } from "./services";
import { CreateUserDto, UpdateUserDto } from "./dto";

export class UsersController {
    static async createUser(user: CreateUserDto) {
        const newUser = await UsersService.createUser(user);
        return newUser
    }

    static async getUserById(req: Request, res: Response) {
        const userid = Number(req.params["userId"]);
        const user = await UsersService.getUserById(userid);
        if (!user) return res.status(404).send("user not found");
        res.json(user);
    }

    static async updateUser(req: Request, res: Response) {
        const userid = Number(req.params["userId"]);
        const user: UpdateUserDto = {
            username: req.body.name,
            email: req.body.email,
            password: req.body.password,
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
