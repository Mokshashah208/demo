const fs=require('fs');
// fs.writeFileSync('Hello.txt','hello world from node.js');
// fs.writeFileSync('Hello.txt','Heelloo again');
// fs.appendFileSync('Hello.txt',' From Moksha');
// const dataBuffer=fs.readFileSync('Hello.txt');
// console.log("data",dataBuffer);
fs.rename('Hello.txt','New.txt', err => {
    if (err) {
      return console.error(err)
    }  
    //done
  });
