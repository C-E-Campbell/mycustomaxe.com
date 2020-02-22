module.exports = {
  registerAcct: async (req, res, next) => {
    const db = req.app.get("db");
    const { email, password, name } = req.body;
    try {
      const register = await db.register_user(email, password, name);
      res.status(200).json({ status: "succesful", message: register });
    } catch (err) {
      console.log("From account registration" + err);
      res.status(500).json({
        status: "failed",
        message: "That email already exists, please login."
      });
    }
  },
  login: async (req, res, next) => {
    const db = req.app.get("db");
    const { email, password } = req.body;
    try {
      const checkForUser = await db.login_user(email, password);
      if (checkForUser[0]) {
        res.status(200).json({ status: "successful", user: checkForUser[0] });
      } else {
        res.status(400).json({
          status: "error",
          message: "Typo? You may need register."
        });
      }
    } catch (err) {
      console.log("From account login" + err);
      res.status(500).json({ status: "failed", message: err });
    }
  },
  deleteAcct: async (req, res, next) => {
    const db = req.app.get("db");
    const { email } = req.body;
    try {
      const deletedUser = await db.delete_user(email);
      res.status(200).json({ status: "succesful", message: "User Deleted" });
    } catch (err) {
      console.log("From account deletion" + err);
      res.status(500).json({ status: "failed", message: err });
    }
  },
  updateEmail: async (req, res, next) => {
    const db = req.app.get("db");
    const { oldEmail, newEmail } = req.body;
    try {
      const updatedEmail = await db.update_email(oldEmail, newEmail);
      res.status(200).json({ status: "succesful", message: "Email Updated" });
    } catch (err) {
      console.log("From email updater" + err);
      res
        .status(500)
        .json({ status: "failed", message: "That email already exists" });
    }
  },
  updatePass: async (req, res, next) => {
    const db = req.app.get("db");
    const { email, newPass } = req.body;
    try {
      const updatedPass = await db.update_pass(email, newPass);
      res.status(200).json({
        status: "succesful",
        message: "Pass Updated"
      });
    } catch (err) {
      console.log("From pass updater" + err);
      res.status(500).json({
        status: "failed",
        message: err
      });
    }
  }
};
