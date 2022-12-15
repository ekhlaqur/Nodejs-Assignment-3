const http = require("http")

const fs = require("fs");
const port = 5000;

 let myData
fs.readFile("index.html", "utf8",(error,data)=>{
          myData = data;        
 })
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html"})
    res.end(myData)
})

server.listen(5000, "127.0.0.1", ()=>{console.log(`server is up at port number ${port}`)})

