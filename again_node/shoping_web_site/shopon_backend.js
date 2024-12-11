const express = require("express");
const fs = require("fs");
const app = express()
const path = require("path")
const port = 80; 



app.set('view engine', 'pug')
app.set("views", path.join(__dirname, 'views'))
app.use(express.urlencoded())


app.get("/", (req, res)=>{

    let params = {}
    res.status(200).render('home.pug', params)
})



app.post('/',(req,res)=>{
     let name = req.body.names
     let city = req.body.City
     let state = req.body.state
     let sector = req.body.sector
     let building = req.body.Building
     let num_items = req.body.Items_number
     let land_mark = req.body.land_mark
     

     app.get("/order", (req, res)=>{

        let params = {
            "name" : name,
            "numitems" : num_items,
            "city" : city,
            "states" :state,
            "buildingname" :building,
       
            }
        res.status(200).render('oders.pug', params)
    })

 

     
})

app.listen(port, ()=>{ 
    console.log("shopon !!")
})

