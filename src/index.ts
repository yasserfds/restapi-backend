import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://fedsiyasser:xdkOgpXGrEHaoMZb@cluster0.wwlljlx.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server listening on https://localhost:8000/");
});

async function connection() {
  await mongoose.connect(MONGODB_URI);
  mongoose.Promise = Promise;
  mongoose.connection.on("error", (error: Error) => {
    console.log(error);
  });

  if (connection) {
    console.log("Connected successfully to Database!");
  } else {
    console.log("Error while connection to database!");
  }
}

connection();
