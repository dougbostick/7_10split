const router = require('express').Router();
const { models: { Product }} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
    try{
        const products = await Product.findAll();
        res.json(products);
    } catch(err){
        next(err);
    }
});

router.get('/:id', async(req, res, next) => {
    try{
        const singleProduct = await Product.findByPk(req.params.id);
        res.send(singleProduct);
    } catch(err){
        next(err);
    }
})

router.put('/:id/edit', async(req, res, next) => {
    console.log('REQ', req.body)
    try{
        const productToEdit = await Product.findByPk(req.params.id);
        res.send(await productToEdit.update(req.body));
    }catch(err){
        next(err);
    }
})