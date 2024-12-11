const http = require('http')
const fs = require('fs')

let hostname = "127.0.0.1"
let port = "80"

const server = http.createServer((req, res) =>{
    res.writeHead(800, {"Content-type" : "text/html"})
    let url = req.url
    res.end("I am the best")
})

server.listen(port, hostname,()=>{
    console.log(`server is at http://${hostname}:${port}/`)
})