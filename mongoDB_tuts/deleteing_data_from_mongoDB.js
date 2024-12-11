//-------- DELETEING DATA FROM THE mongoDB database -------------// 

//to delelte the data from the database we use below line--
db.name_of_data.deleteMany({name : 'samsung'})
// in above  we use "deleteMany()" it will delete all the data whose "name" is "samsung"
// "deleteMany()" will delete all the data maching to the value what you gave in the param]

db.name_of_data.deleteOne({name : "samsung"})
// in above we use "deleteOne()" if there is multiple data whose name is "samsung" but it wil
// only delete any one data whose name is "samsung" 

// example -
db.mobiles.deleteMany({ name: "samsung", qty: 54 })


db.mobiles.deleteMany({ name: "samsung", qty: 54 })
// we have to  insert the value of the int he brackets in above we insert the "name" of the 
// specific data and "qty" so it will delete those data whose "name" will "samsung" and "qty" wil "54"

// another way to delete the data below --
db.mobiles.deleteMany({ qty: { $gt: 10 } })
db.mobiles.deleteMany({ qty: { $lt: 10 } })
db.mobiles.deleteMany({ $or: [{ price: { $gt: 500 } }, { qty: 500 }] })

