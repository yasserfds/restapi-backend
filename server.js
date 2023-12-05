const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

app.use(express.json());

const subscribersRouter = require("./routes/subscribers")
app.use("/subscribers", subscribersRouter)