const fs=require('fs');
const routes=(req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      res.write("<html>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body=[];
        // this is how we register the event listener
        req.on('data',(chunk)=>{
          console.log("chunck",chunk);
          body.push(chunk);
        });
        req.on('end',()=>{
          const parseBody=Buffer.concat(body).toString();
          const message=parseBody.split('=')[0];
          //const message=parseBody.split('=')[1];
          //don't use this because this will block other work untill this file is executing...
          //fs.writeFileSync("write.txt", message);
          fs.writeFileSync("write.txt",message,(err)=>{
            res.setHeader("Location", "/");
            res.statusCode = 304;
            return res.end();
          });
        })
    }
    // console.log("Node sever is running....");
    // console.log("Response",req.url,req.method,req.headers);
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body><h1>Hello user from node js</h1><h5>Hello from H5</h5></body>");
    res.write("</html>");
    res.end();
}
//exporting single thing
// module.exports=routes;
//exporting multiple thing
// module.exports={
//     handler:routes,
//     text:'SOME TEXT'
// }
//long syntax
// module.exports.handler=routes;
// module.exports.text="SOME TEXT";
//sort syntax
exports.handler=routes;
exports.text="SOME TEXT";
