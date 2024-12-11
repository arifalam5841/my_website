const http = require('http')
const fs = require('fs')
const { hostname } = require('os')
// calling file 

let home = fs.readFileSync('again_node/index.html', "utf-8")
let contact = fs.readFileSync('again_node/contact.html', "utf-8")
let about = fs.readFileSync('again_node/about.html', "utf-8")
let services = fs.readFileSync('again_node/services.html', "utf-8")

// const hostname = '127.0.0.1'
const port = 80
// document.getElementById('btn')
const server = http.createServer((req,res)=>{
// res.setHeader("Content-type" , "text/html")
url = req.url;

res.writeHead(200, { 'Content-type': "text/html" })
console.log(url)

// let btn = document.getElementById('btn')
// btn.addEventListener('click', function(){
//     res.end(services)
// })
if(url == "/"){
res.end(home)
}
else if(url == "/services"){
res.end(services)
}
else if(url == "/about"){
res.end(about)
}
else if(url == "/contact"){
res.end(contact)
}

else{
    res.statusCode = 404
    console.log("sorry!!!")
}
})

server.listen(port, hostname ,()=>{ // calling the host name
console.log(`Server is runnig on `)
})

