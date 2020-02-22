module.exports = {
  registerAcct: (req, res, next) => {
    res
      .status(200)
      .json({ status: "successful", message: "user is registered" });
  },
  login: async (req, res, next) => {
    const db = req.app.get("db");
    try {
      const allUsers = await db.get_all_users();
      res.status(400).json(allUsers);
    } catch (err) {
      res.status(500).json({ status: "failed", message: err });
    }
  },
  deleteAcct: (req, res, next) => {
    res
      .status(200)
      .json({ status: "successful", message: "user acct is deleted" });
  }
};
