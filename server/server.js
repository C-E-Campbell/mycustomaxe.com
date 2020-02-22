require("dotenv").config();
const { PORT, CONNECTION_STRING } = process.env;
const express = require("express");
const app = express();
const massive = require("massive");
const userRouter = require("./routes/userRoutes");
const guitarRouter = require("./routes/guitarRoutes");

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/guitar", guitarRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
