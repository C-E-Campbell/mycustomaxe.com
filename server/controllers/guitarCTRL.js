module.exports = {
  addGuitar: async (req, res, next) => {
    const db = req.app.get("db");
    const {
      brand,
      pickups,
      body,
      neck,
      tuners,
      electronics,
      misc,
      creator
    } = req.body;
    try {
      await db.add_guitar(
        brand,
        pickups,
        body,
        neck,
        tuners,
        electronics,
        misc,
        creator
      );
      res.status(200).json({ status: "successful", message: "Guitar added" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ status: "failed", message: err });
    }
  }
};
