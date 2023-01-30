const router = require("express").Router();
const {
  models: { Order, LineItem },
} = require("../db");
module.exports = router;


//find open order
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

router.get('/:id/history', async(req, res, next) => {
  try{
    const orderHistory = await Order.findAll({
      where: {
        userId: req.params.id,
        status: 'paid'
      }
    })
    res.send(orderHistory);
  }catch(err){
    next(err);
  }
})

router.put('/:id/checkout', async (req, res, next) => {
  try{
    const order = await Order.findByPk(req.params.id);
    order.status = 'paid';
    await order.save();
    res.send(order);
  } catch(err){
    next(err);
  }
})
