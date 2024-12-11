const express = require("express")
const path = require("path")
const fs = require("fs");
const { groupEnd } = require("console");
const { Agent } = require("https");

const server = express()
const port = 80;

server.set('view engine', 'pug')

server.set("views", path.join(__dirname, 'views'))
server.use(express.urlencoded())

server.get('/', (req, res)=>{
 const params = {"heading": "Gym"}
 res.status(200).render('pug_demo.pug', params)
})

server.post('/', (req, res)=>{
     let name = req.body.name
     let age = req.body.age
     let  gender= req.body.gender
     let adress = req.body.adderess
     let aboutyou = req.body.aboutyou
     let herhim;
     if(gender == "Male"){
           herhim = "him"
     }
     else if(gender == "male"){
           herhim = "him"
     }
     else if(gender == "Female"){
           herhim = "her"
     }
     else if(gender == "female"){
           herhim = "her"
     }

     else{
         herhim = "her/him"
     }
     server.get('/person_detail', (req, res)=>{
        // const params = {"name": name, "age" : age, "gender" : gender, "adress" : address , "moredetail" : aboutyou , "herorhim" : herhim}
        res.status(200).render('person_detail.pug', {"age" : age, "name" : name, "adress" : adress, "gender" : gender, "moredetail" : aboutyou, "herorhim" : herhim} )
       })
})


server.listen(port, ()=>{
    console.log("Welcome to Gym")
})