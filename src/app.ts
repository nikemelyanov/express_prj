import express from "express";
import bodyParser from "body-parser";
import indexRouter from "./router";

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
    console.log("query params:", req.query);
    next();
});
app.use("/api/v1/", indexRouter);

async function start() {
    try {
        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (err) {
        console.error(err);
    }
}
start();
