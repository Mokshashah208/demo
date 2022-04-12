//express js
const express = require("express");
const app = express();
    app.set('view engine','pug');
    app.set('views','HTML');

    // app.set('view engine','ejs');
    // app.set('views','HTML');

const path =require('path');
const adminData=require('./routes/admin');
const homeroute=require('./routes/shop');
const bodyparsar = require("body-parser");

app.use(bodyparsar.urlencoded({ extended: false }));
app.use('/admin',adminData.router);
app.use(express.static(path.join(__dirname,'public')))
app.use(homeroute);
app.use((req,res,next)=>{
  res.render('404',{pageTitle:"error"});
  // res.sendFile(path.join(__dirname,'.','HTML','404.html'));
})
app.listen(4200);
handlebars
const expressHbs=require('express-handlebars');
app.engine('hbs',expressHbs());
app.set('view engine','hbs');
app.set('views','HTML/handlebars');

  //pug
//app.set  is use for global configaration
//in this case we are telling gives 
{/* <Demo value={{app:value}}></Demo> */}
//manually added html file
// app.use((req,res,next)=>{
//   console.log("error ");
//   res.status(404).send('<h1>Error 404 page not found</h1>');
// });

// app.use("/", (req, res, next) => {
//   // console.log("In middleware");
//   res.send("<h1>Hello from express</h1>");
// });
// app.use("/", (req, res, next) => {
//   // console.log("In middleware next");
//   next();
// });
//node js
// const routes= require('./routes');
// const server = http.createServer(routes);
// console.log("Text:",routes.text);
// const server = http.createServer(routes.handler);
// const server = http.createServer(app);
// server.listen(4200);
//const http = require("http");
