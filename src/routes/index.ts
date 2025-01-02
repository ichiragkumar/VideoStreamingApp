import express, {Express, Request, Response} from "express";
import v1Router from "./v1";


const router = express.Router();

router.get("/", v1Router);

export default router;

