const express = require("express");
const path=require('path');
const rootDir=require('../path');
const router = express.Router();
const productController= require('../Controller/Products');
// /admin/add-product =>GET
const products=[];
router.get("/add-product",productController.getAddProduct) 
router.post("/add-product",productController.postAddProduct);
// (req, res, next) => {
    
//     res.render('add-product',{pageTitle:'Add Product'});
//     // /admin/add-product =>POST
//     // res.sendFile(path.join(rootDir,'HTML','add-product.html'));
//     // res.sendFile(path.join(__dirname,'..','HTML','add-product.html'));
//}
// (req, res, next) => {
//     console.log(res.body);
//     //add data to product
//     products.push({title:req.body.title,path:'/admin/add-product'});
//     res.redirect("/");
// }
module.exports.router=router;
//this is a global
module.exports.products=products;
//module.exports = router;

//   res.send(
//     '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></from>'
//   );
