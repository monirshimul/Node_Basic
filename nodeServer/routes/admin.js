const express = require('express');
const router = express.Router();
const path = require('path');
const products = [];


router.get('/add-product', (req, res, next)=>{
    //console.log('in the middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    
});

router.post('/product', (req, res, next)=>{
    products.push({ product_title : req.body.product });
    
    res.redirect('/');
    //res.send(product);
    
    
});


exports.routes = router;
exports.products = products;
