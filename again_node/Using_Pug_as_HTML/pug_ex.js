// if you want to open a file or a folder in another app of vs  write "code ." in the path in terminal
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
// app.use('/static', express.static('static')) // For serving static files

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
// including folder
// we have to first make a folder and then set the  pug files in that  folder
app.set('views', path.join(__dirname, 'views'))  // like this we include a folder

// TP STORE OR TRANSFER THE DATA FROM THE FORM WRITE THE BELOW LINE
app.use(express.urlencoded())


// ENDPOINTS
// if the  url will be "/" then it will serve what ever you want to serve
app.get('/', (req, res) => {
    // the first thing is we have to make a object and then we have give the vars 
    // from the pug file in "" and we have give them values
    // syntaxt to give value in vars - {"var name" : "value"}
    // example below one - "title" : "pug tutu" the "title" is the name of the var and "pug tut"
    // is the value that we give in the var
    const params = { 'heading': 'This is the Gym' }
    const con = "This is the best content on the internet so far so use it wisely"// here we are sending values in vars
    // we have to always give "status" " 200" its good for website 
    res.status(200).render('pug_demo.pug', params);// here the first value is the name of the 
    // file and the second is the var in that there a object and in the object we given values
    // to the vars of the pug file 
})
// TO call the file or test pug file write "localhost/url name"
// START THE SERVER


app.post('/', (req, res) => {// here we maing the condition for the element whose method is "post"  it also like 'addeventlistener'
    console.log(req.body) //if we click on the submit whom we gave "post" method then it will log the information the form or the body

    let name = req.body.name // her the  "name" is the name of the input 
    let age = req.body.age  // here we are taking data of perticuler element by its "name"
    let gender = req.body.gender
    let address = req.body.adderess
    let aboutyou = req.body.aboutyou

    let himorher;
    if (gender == "Male" ) {
        himorher = "him"
    }
    else if (gender == "Female") {
        himorher = "her"
    }
    else if (gender == "male" ) {
        himorher = "him"
    }
    else if (gender == "female") {
        himorher = "her"
    }
    else {
        himorher = "him/her"
    }
    let output = `Name : ${name}, Age : ${age}, Gender : ${gender}, Address : ${address}, about ${himorher} : ${aboutyou}` //transferming the data
    console.log(output)
fs.writeFileSync("output.txt", output) // here it when we click on the btn it will make a new file and then store the data what we gave

    const params = { "message": "you form has been submited successfully" }
    res.status(200).render("pug_demo.pug", params)

    // res.send("<h1> Hello </h1>")
})
app.listen(port, () => {
    console.log(`The sever is working bro dont worry  ${port}`);
});
