const express= require('express');
const path=require('path');
const rootDir=require('../path');
const adminData =require('./admin');
const router=express.Router();
router.get('/',(req,res,next)=>{
    //added pug file 
    const products=adminData.products;
    res.render('shop',{prods:products,pageTitle:'shop',path:'/',hasProducts:products.length>0});

})
module.exports=router;
// res.sendFile(path.join(rootDir, 'HTML','shop.html'));
// console.log('shop js',adminData.products);
//res.sendFile(path.join(__dirname,'..', 'HTML','shop.html'));
//console.log("In middleware");
//res.send("<h1>Hello from express</h1>");