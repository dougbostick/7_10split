const router = require('express').Router();
const { models: {LineItem, Product }} = require('../db');
module.exports = router;

router.post('/add', async (req, res, next) => {
    // console.log('REQ', req.body)
    try{
        const existingLineItem = await LineItem.findOne({
            where: {
                orderId: req.body.orderId,
                productId: req.body.productId,
        }})
        if(!existingLineItem){
            const newLineItem = await LineItem.create({orderId: req.body.orderId, productId: req.body.productId, quantity: req.body.quantity})
            res.send(newLineItem);
        } else {
            existingLineItem.quantity += req.body.quantity;
            await existingLineItem.save();
            res.send(existingLineItem);
        }
    } catch(err){
        next(err);
    }
})

//find current order
router.get('/:id', async (req, res, next) => {
    try{
        const cartItems = await LineItem.findAll({where: {orderId: req.params.id}, include: Product });
        res.send(cartItems);
    } catch(err){
        next(err);
    }
})
