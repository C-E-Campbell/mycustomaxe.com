const express = require("express");
const router = express.Router();
const userCTRL = require("../controllers/usersCTRL");
const { registerAcct, login, deleteAcct } = userCTRL;

router
  .route("/")
  .get(login)
  .delete(deleteAcct)
  .post(registerAcct);

//

module.exports = router;
