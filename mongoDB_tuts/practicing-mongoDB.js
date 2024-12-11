const mongoose = require('mongoose');//including mongoose

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/food_store');
  console.log("connected !")
}

const db_schema = new mongoose.Schema({
     name : String,
     store : String,
     qty : Number,
     sold : Number,
     price : Number,
     quality : Number
})

db_schema.methods.speak = function () { 
    const greeting = "My name is " + this.name
    console.log(greeting);
}

const food_deltail = mongoose.model('item', db_schema);

// making  ojects

const apple = new food_deltail({ name: 'Apple', store : "fruties", qty : 10, sold : 4, price: 100});
const mango = new food_deltail({ name: 'Mango', store : "fruties", qty : 4, sold : 2, price: 50});
const banana = new food_deltail({ name: 'banana', store : "yellow store", qty : 10, sold : 10, price: 100});
const grapes = new food_deltail({ name: 'Grapes', store : "fruties", qty : 1, sold : 4, price: 10});
const apple2 = new food_deltail({ name: 'Apple', store : "new fruits", qty : 1, sold : 2, price: 50});
const stawberry = new food_deltail({ name: 'stawberry', store : "new fruits", qty : 1, sold : 2, price: 50, quality : "good"});

apple.save(function (err, item) {
    if (err) return console.error(err);
})
mango.save(function (err, item) {
    if (err) return console.error(err);
});
banana.save(function (err, item) {
    if (err) return console.error(err);
});
grapes.save(function (err, item) {
    if (err) return console.error(err);
});
apple2.save(function (err, item) {
    if (err) return console.error(err);
});
stawberry.save(function (err, item) {
    if (err) return console.error(err);
});

// --------------------------------------------------------------------------------

food_deltail.find({ name: "Apple" }, function (err, a) {
    if (err) return console.error(err);
    console.log(a);
  })
food_deltail.deleteMany({ name: "Apple" }, function (err, a) {
    if (err) return console.error(err);
    console.log(a);
  })

  
food_deltail.updateMany( {name : "banana"}, {$set : {name : 'arif'}},function (err, b) {
    if (err) return console.error(err);
    console.log(b);
  })

  food_deltail.find( function (err, b) {
    if (err) return console.error(err);
    console.log(b);
  })