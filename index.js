const http = require('http');

const server = http.createServer((req,res)=>{
  const myHtml = `
  <h1>Hello BushidoDev</h1>
  <p style="color:green">Devrogerstack master | 2021</p>
  `
  res.write(myHtml)
  res.end()
})

server.listen(3000,'localhost',()=>{
  console.log("Start server post 3000")
})