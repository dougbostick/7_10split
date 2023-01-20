const router = require("express").Router();
const {
  models: { Order, LineItem },
} = require("../db");
module.exports = router;

router.get("/:id", async (req, res, next) => {
  try {
    const openOrder = await Order.findOne({
      where: {
        userId: req.params.id,
        status: "pending",
      }
    });
    if (!openOrder) {
      const newOrder = await Order.create({ userId: req.params.id });
      res.send(newOrder);
    } else {
      res.send(openOrder);
    }
  } catch (err) {
    next(err);
  }
});
