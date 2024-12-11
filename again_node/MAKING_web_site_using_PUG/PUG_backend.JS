const express = require("express");
const res = require("express/lib/response");
const app = express()
const path = require("path")
const port = 800; //if you port is not equal to '80' then write - localhost:"port-number" like - localhost:800
const mongoose = require('mongoose');
const { get } = require("express/lib/response");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/ContactDance');
}

// define Schema
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobilenum: Number,
    favfood: String,
    address: String,
});

const contactdance = mongoose.model('Contact', ContactSchema);

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, 'views'))
app.use(express.urlencoded())
app.get("/", (req, res) => {
    let params = {}
    res.status(200).render('home.pug', params)
})

app.get("/contact", (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params)
});

app.post("/contact", (req, res) => {
    var myData = new contactdance(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    });
})

    // this is a problem

    app.listen(port, () => {
        console.log("Welcome to Foodies !!")
    })

