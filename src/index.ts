import express, {Express, Request, Response} from "express";
import { PORT } from "./config/config";
import v1Router from "./routes/v1";

import path from 'path';



const app:Express = express();
app.use(express.json());


app.use("/api", v1Router);

app.use("/videos", express.static(path.join(__dirname, "videos")));


console.log('Serving videos from:', path.join(__dirname, '../videos'));


app.get('/hls', (_, res) => {
  res.send(`
    <html>
      <body>
        <h1>HLS Video Streaming</h1>
        <video controls autoplay style="width: 100%; max-width: 600px;">
          <source src="/videos/smgho.m3u8" type="application/x-mpegURL">
        </video>
      </body>
    </html>
  `);
});


app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
