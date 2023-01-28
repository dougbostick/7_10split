const router = require('express').Router();
const { models: { Product, User }} = require('../db');
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
    // console.log('REQ', req.body);
    const isAdmin = req.body.user.me.isAdmin;
    const {id, name, imgUrl, description, price } = req.body;
    try{
        if(isAdmin){
            const productToEdit = await Product.findByPk(id);
            res.send(await productToEdit.update({ name, imgUrl, description, price }));
        } else {
            res.send('could not authenticate admin');
        }
      
    }catch(err){
        next(err);
    }
})