const express = require("express")
const fs = require('fs')
const path = require("path")
const port = 800
const foodies = express()

foodies.set('view engine', 'pug')
foodies.set("views", path.join(__dirname, 'views'))
foodies.use(express.urlencoded())


foodies.get("/", (req,res)=>{
      let params = {}
      res.status(200).render('home.pug', params)
})

foodies.listen(port, ()=>{
     console.log("Foodies")
})