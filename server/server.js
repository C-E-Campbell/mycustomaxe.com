require("dotenv").config();
const { PORT, CONNECTION_STRING } = process.env;
const express = require("express");
const app = express();
const massive = require("massive");
const userRouter = require("./routes/userRoutes");

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.use(express.json());

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
