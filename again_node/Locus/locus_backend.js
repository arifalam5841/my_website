const express = require("express")
const fs = require('fs')
const path = require("path")
const port = 50
const locus = express()
const mongoose = require('mongoose');
let addmission_aproved = fs.readFileSync("./again_node/Locus/views/aproved_admisn.pug", "utf-8")
  
locus.set('view engine', 'pug')
locus.set("views", path.join(__dirname, 'views'))
locus.use(express.urlencoded())


locus.get("/", (req,res)=>{
      let params = {}
      res.status(200).render('home.pug', params)
})

locus.listen(port, ()=>{
     console.log("Locus coaching classes")
})


// from below mongo db starts -----------------------------------------

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/Addimission_list');
}

// define Schema
const ContactSchema = new mongoose.Schema({
   firstname: String,
   lastname: String,
   school: String,
   Std: String,
   board: String,
   mobille_number: Number,
   email_address: String,
});

const addmission = mongoose.model('Addmission', ContactSchema);


locus.post("/contact", (req, res) => {
      
      var myData = new addmission(req.body);
      myData.save().then(() => {
          res.send(addmission_aproved)
      }).catch(() => {
          res.status(400).send("item was not saved to the databse")
      });
  })
  
 