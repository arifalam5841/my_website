// var stripe = require('stripe')('Your_Secret_Key');

const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
  
var Publishable_Key = 'Your_Publishable_Key'
var Secret_Key = 'Your_Secret_Key'
  
const stripe = require('stripe')(Secret_Key)
  
const port = process.env.PORT || 3000
  
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
  
// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
  
app.get('/', function(req, res){
    res.render('standard', {
       key: 'pk_test_51L3zZQSBCc8y9jtJHitSwDsQOWepMbqfuSQjMlU4ZXt9Hvm26f8gGG4yIAXZdryBQdy1Kis7LiKP5JFEFM6Qw01Z00KjFjJVdp'
    })
})
  
app.post('/payment', function(req, res){
  
    // Moreover you can take more details from user
    // like Address, Name, etc from form
    stripe.customers.create({
        email: req.body.stripeEmail, // this how you can get data from the html in server
        source: req.body.stripeToken,
        name: 'arif alam',
        address: {
            line1: 'TC 9/4 Old MES colony',
            postal_code: '452331',
            city: 'Navi mumbai',
            state: 'Maharashtra',
            country: 'India',
        }
    })
    .then((customer) => {
  
        return stripe.charges.create({
            amount: 100,     // Charing Rs 25
            description: 'Web Development Product',
            currency: 'INR',
            customer: customer.id
        });
    })
    .then((charge) => {
        res.send("Success")  // If no error occurs
    })
    .catch((err) => {
        res.send(err)       // If some error occurs
    });
})
  
app.listen(port, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})