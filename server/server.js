require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
console.log(process.env);
// massive(CONNECTION_STRING).then(db => {
//   app.set("db", db);
//   console.log("db connected");
// });

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(5556, () => console.log(`Listening on 5556`));
