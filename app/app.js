"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const usersRouter_1 = __importDefault(require("./modules/users/usersRouter"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use("/users", usersRouter_1.default);
async function start() {
    try {
        app.listen(3000, () => console.log("Server started on port 3000"));
    }
    catch (err) {
        console.error(err);
    }
}
start();
