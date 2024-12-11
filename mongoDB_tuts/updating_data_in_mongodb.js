// So now we will learn how to change the data in mongo db
// it is quite similer to deleting data in mongo

// so now i am making a database in mongo 

db.food_stock.insertMany([
    {name: "apple", price: 52,sold:   10, qty: 250 },
    {name: "mango", price: 122,sold: 5, qty: 55 },
    {name: "orange", price: 152,sold: 41, qty: 14 },
    {name: "apple", price: 100,sold: 5, qty: 100 },
    {name: "grapes", price: 12,sold: 100, qty: 4 }, 
])

// to update the value we use "$set" as we use in below 


// and now if you want to update the upper data then see the  below line
db.food_stock.updateOne({name : "apple"} ,{ $set :{price : 2}})
// in above the "price" will be become "2" of any one data whose "name" is "apple"

db.food_stock.updateMany({name : "apple"}, {$set: {price : 10}})
// in above the "price" will be become "10" of all the data whose the "name" ia "apple"

// the "updateOne()" will only update the one data whose value is equal to the given value
db.data_name.updateOne()

// the "updateMany()" will update all the data whose value is equal to the given value
db.data_name.updateMany()


// ANOTHER WAY TO UPDATE THE DATA IS BELOW

db.food_stock.updateMany({price : {$gte : 100}},{$set :{name : "pinaple"}})
db.food_stock.updateOne({$or:[{sold:{$gt : 100}}, {sold:{$gt : 150}}]}, {price : 20})



db.foods_items.insertMany([
    {name : "biryani",price : 400,qty : 5,restaurant:"aysha" },
    {name : "fried_rice",price : 12,qty : 2 ,restaurant:"Non-veg dhaba" },
    {name : "biryani",price : 180,qty : 1,restaurant:"aysha" },
    {name : "chicken tikka",price : 480,qty : 1,restaurant:"Krishchineese" },
    {name : "Gril meat",price : 190,qty : 2,restaurant:"Krishchineese" },
    {name : "Noodles",price : 80,qty : 5,restaurant:"aysha" },
])

db.foods_items.updateOne({price : 80}, {$set: {name : "ice-creame"}})