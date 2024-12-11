// first you have to download the mongo like this -" npm install mongoose --save "
// to get documentations of the mongo you can go to 'mongoose docs'

// getting-started.js
const mongoose = require('mongoose');//including mongoose

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/arif');
  console.log("connected !")
}

const kittySchema = new mongoose.Schema({/*in "Schema" we right the variables and set the 
                                         type of that variable As you see in blow there is
                                         is a variable called 'name' and i set the type of 
                                         this var 'String' means what ever we will give value
                                         in the var it will be coverted in a string */

  name: String

});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () { //here we are making a method in this method we have
  // make a var in that var we set '"my name is" + this.name' this.name is the name of the data
  const greeting = "My name is " + this.name
  console.log(greeting);
}


// IN below there is 'Arifkitten' so when we save it in mongo mongo will connvert it the prular form
//means 'Arifkitten' will be 'Arifkittens' in mongo
// AND 'Arifkittens' WILL BE THE NAME OF THE DATABASE //
const Kitten = mongoose.model('Arifkitten', kittySchema);// now we have compail the Schema in a 
// model don't take headak just remember the we have make the Schema A model like above

// Making objects 
// these all object will be store in 'Arifkittens' database 
const Arifkitten = new Kitten({ name: 'Arif alam' }); // so now we are giving values in the var
// that we made in the Schema the its name is 'Kitten' because while converting Schema in a 
//model we gave the name of the Schema a 'Kitten'

// MAKING  MULTIPLES DATA BASE BELOW
const ayankittens = new Kitten({ name: 'ayan' });
console.log(Arifkitten.name); // now we are log the name of the object



//------------------- SAVING DATA IN THE MONGOdb DATA BASE ----------------//

Arifkitten.save(function (err, arif) {// the first param is the error and the second is the 
  //object that  we  are saving we have give any name to the param just like req and res in express
  if (err) return console.error(err);
});
// the name of this database will be Arifkittens 


// saving the another object
ayankittens.save(function (err, ayan) {
  if (err) return console.error(err);
});

// Finding onjects in mongo in node

// in finding first you have give the filter object like below we have gave '{name : "Arif alam"}'
//so it will written all the onject whose name is arif
// and in second we have give a call back in this the first value is for error and second the
//onject what are finding we can give any name to these params
Kitten.find({ name: "Arif alam" }, function (err, arif) {
  if (err) return console.error(err);
  console.log(arif);
})

// updating
Kitten.updateMany({name : "sham"},{$set : {name : "arif"}},function (err, arif) {
  if (err) return console.error(err);
  console.log(arif);
})

// if you want all the object  in the database do below on 
Kitten.find(function (err, arif) {
  if (err) return console.error(err);
  console.log(arif);
})