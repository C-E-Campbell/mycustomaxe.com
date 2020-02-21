const express = require("express");
const router = express.Router();
const userCTRL = require("../controllers/usersCTRL");
const { register, login } = userCTRL;

router
  .route("/")
  .get(login)
  .post(register);

//

module.exports = router;
