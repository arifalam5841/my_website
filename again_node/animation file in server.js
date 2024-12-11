const http = require('http')

const fs = require("fs")
let animation = fs.readFileSync("Examples/animation_example.html","utf-8")

let server = http.createServer((req, res)=>{
res.writeHead(200, { "Content-type": "text/html" })
res.end(animation)
})


server.listen(80, '127.1.0.0', () => {
    console.log("servering")
})

