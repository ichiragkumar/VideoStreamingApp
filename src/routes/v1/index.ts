import express, {Express, Request, Response} from "express";


const v1Router = express.Router();


v1Router.get("/", (_, res) => {
    res.send("Hello World hii  bol are you! match lol");
});
v1Router.get("/health", (_, res) => {
    res.send("Hlolealthy");
});
export default v1Router;