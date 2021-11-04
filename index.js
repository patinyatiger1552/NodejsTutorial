const http = require('http');
const fs = require('fs');

const indexPage = fs.readFileSync(`${__dirname}/webpages/index.html`,'utf-8')
const productPage = fs.readFileSync(`${__dirname}/webpages/product.html`,'utf-8')

const server = http.createServer((req,res)=>{
  const pathName = req.url
  console.log("url = ", pathName)
  if(pathName === "/" || pathName === "/home"){
    res.end(indexPage)
  }else if (pathName === "/product"){
    res.end(productPage)
  }else{
    res.writeHead(404)
    res.end("<h1>Not Found</h1>")
  }
})

server.listen(3000,'localhost',()=>{
  console.log("Start server post 3000")
})