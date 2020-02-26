const express = require("express");
const router = express.Router();
const guitarCTRL = require("../controllers/guitarCTRL");
const { addGuitar } = guitarCTRL;

router.route("/create").post(addGuitar);

module.exports = router;
