import { Request, Response } from "express";
import { AuthService } from "./services";
import { AuthLoginDto, AuthRegisterDto } from "./dto";

export class AuthController {
    static async register(req: Request, res: Response) {
        const data: AuthRegisterDto = {
            username: req.body.name,
            email: req.body.email,
            password: req.body.password,
        };
        const result = await AuthService.register(data);
        res.status(201).json(result);
    }

    static async login(req: Request, res: Response) {
        const data: AuthLoginDto = {
            email: req.body.email,
            password: req.body.password,
        };
        if (!data.email || !data.password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        if (typeof data.email !== 'string' || typeof data.password !== 'string') {
            return res.status(400).json({ message: 'Email and password must be a string' });
        }
        
        const result = await AuthService.login(data);
        res.status(200).json(result);
    }
}
