const express = require("express");
const router = express.Router();
const guitarCTRL = require("../controllers/guitarCTRL");
const { addGuitar } = guitarCTRL;

Router.route("/create").post(addGuitar);

module.exports = router;
