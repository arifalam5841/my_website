const express = require("express")
const server = express()
const fs = require("fs")
const { connected } = require("process")
const { consumers } = require("stream")
const port = 80;

// ------- you can do  this also below --------------

// let google = fs.readFile("./again_JS/Google.html", "utf-8", (err, data) => {
//     console.log(data)
// })

let google = fs.readFileSync("./again_JS/Google.html", "utf-8")
let home = fs.readFileSync("./again_node/express/home.html", "utf-8")
let about = fs.readFileSync("./again_node/express/about.html", "utf-8")
let contact = fs.readFileSync("./again_node/express/contact.html", "utf-8")


server.get("/", (req, res)=>{
res.send(google)
})
server.get("/about", (req, res)=>{ // if the url will this 
res.send(about) // then do this
})
server.get("/contact", (req, res)=>{
res.send(contact)
})




server.listen(port, ()=>{
    console.log("the first server is working")
})





