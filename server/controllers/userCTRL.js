module.exports = {
  registerAcct: (req, res, next) => {
    res
      .status(200)
      .json({ status: "successful", message: "user is registered" });
  },
  login: (req, res, next) => {
    res.status(200).json({ status: "successful", message: "user is loggedin" });
  },
  deleteAcct: (req, res, next) => {
    res
      .status(200)
      .json({ status: "successful", message: "user acct is deleted" });
  }
};
