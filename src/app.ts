import express from "express";
import bodyParser from "body-parser";
import usersRouter from "./modules/users/usersRouter";

const app = express();
app.use(bodyParser.json());
app.use("/users", usersRouter);

async function start() {
    try {
        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (err) {
        console.error(err);
    }
}
start();
