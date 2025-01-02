import express, {Express, Request, Response} from "express";
import { PORT } from "./config/config";
import v1Router from "./routes/v1";

const app:Express = express();
app.use(express.json());


app.use("/api", v1Router);




app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
