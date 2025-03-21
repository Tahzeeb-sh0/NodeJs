import express from "express";
import { connectMongodb } from "./dbconnect.db.js";
import path from "path";
const app = express();
const PORT = 8000;

connectMongodb("mongodb://127.0.0.1:27017/shortUrl");
console.log("db connected");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

import urlRouter from "./routes/url.route.js";
import pageRoute from "./routes/page.js";
import userRoute from "./routes/static.route.js";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlRouter);
app.use("/page", pageRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Server listening on this port: ${PORT}`);
});
