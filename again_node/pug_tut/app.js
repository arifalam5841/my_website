//---- if you want to open a file or a folder in another app of vs  write "code ." in the path in terminal
// first install pug and expres like this : "npm install pug/express"
const express = require("express")
const path = require("path") // this is also a module which will atomatecaly map the path of the file or a folder
const server = express()

const port = 8


// serving static file

//            url                        folder
server.use("/static", express.static("static_fldr")) // the static_fldr will call the folder  with the static_fldr

// to call the file from a "static_fldr" folder we have call with it's url that is "/static"
// syntax to call - 'localhost/static/file name.js'

// including templet pug
server.set('view engine', 'pug')


// making directory

server.set('views',path.join(__dirname, "views"))


// now we are send the value in the pug file which is "demo.pug" 
server.get("/demo", (req, res)=>{
    // here we send the value in the  var of the pug file
    res.status(200).render("demo", {title : "pug file", message : "this is a pug tutorial"})
    
    // styntax -  res.status(200).render("file-name", {var of the file : "pug file", h1 : "this is a pug tut"})    //
    
    
    res.status(200).render("demo", {title : "pug file", h1 : "this is a pug tut"})
})



server.get("/", (req, res)=>{
    res.send("arif is a good boy")
})

server.listen(port, ()=>{
    console.log("the server is working")
})