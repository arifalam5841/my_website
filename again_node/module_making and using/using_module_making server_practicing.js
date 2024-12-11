const http = require("http")
const fs = require("fs")
const module_file = require("./makig_module_practicing")
const about = fs.readFileSync("again_node/about.html")
const home = fs.readFileSync('again_node/index.html')
const services = fs.readFileSync("again_node/services.html")
const hostname = "127.0.0.1"
const port = 80
// module_file.change("black")

const server = http.createServer((req,res)=>{
      url = res.url
      res.writeHead(502,{"Content-type" : "text/html"})
      module_file.serve("/", home)
      module_file.serve("/services", services)
      module_file.serve("/about", about)

   
})


server.listen(port, hostname,()=>{
    console.log(`server is at http://${hostname}:${port}/`)
})
