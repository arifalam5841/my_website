// TO make a new DataBase you have to type - "use databasename" 
// example makeing database - "use arif"

// IMPORTANT- to see all databases in the data you have to write blow line
// Syntax -  show dbs


// NOW WE ARE INSERṬING DATA IN THE DATABASE

// first we have to write "db" that is our database "arif"
// then data name and the "insertone" in the insertone fuc you have add the data what you wnat to add
// like below

// in blow the "items" is the name of the data and the "db" is our database
// and "insertOne" is function in that we will add  data
// IMPORTANT - in "insertOne" funtion we can only add one data    
// and that is a "object"
db.items.insertOne({
    name : "arif" ,age : "14", profesion: "programmer", std : "8th"
})

// and now if you want to add this data in the mongo copy the above code and paste 
//  in the database where you want to paste make sure you are swichted in the database
// where you wnat to add the data
// IMPORTANt - you have to  do this all thsi process in the "mongo" poweshell
// IMPORTANT - "to paste in powershell you have just 'right click' "


// TO INSERT MULTIPLE DATA IN TE DATABASE YOU HAVE USE "insertMany" func just  like blow
// IMPORTANT - you have to make a array and in that array you can make multiple objects 
// just  like below
db.items.insertMany([
    {name : "arif" ,age : "14", profesion: "programmer", std : "8th"},
    {name : "ayan" ,age : "54", profesion: "coder", std : "5th"},
    {name : "rehan" ,age : "14", profesion: "doctor", std : "11th"},
    {name : "sham" ,age : "15", profesion: "engineer", std : "10th"}
])

// now you have just copy this and paste in the databse

// TO SEE THE DATA IN THE DATABASE 
// YOU TO WIRTE "db" and the data name then write "find()"
syntaxt - db.data_name.find()
// EXAMPLE BELOW
db.items.find()

// in above the "db" is the database and the "items" in the data name and at the last "find()" 


// so now we are add one more data funtion with another name in the "arif" database

db.mobiles.insertMany([
{name:  "samsung", price : "52136", qty : "522", sold : "55"},
{name:  "oppo", price : "2136", qty : "52", sold : "5"},
{name:  "i phone", price : "12136", qty : "855", sold : "2255", isinstock : true},
])

// now if you want to see the data of the this function 
// sytaxt - 
db.mobiles.find()

//here the 'db' is the database and "mobiles" is the name of the data and to see data we write "find()"



// you can use like this also here i have write a array in a object and in that array i have
// writen multiple datas
db.customers.insertOne({"customer_name": "arif alam", "customer_detail":[
    {"age" : "50", "DOB": "12/7/2007"},
    {"Profesion" : "coder", "digree" : "bachlor digree of computer science"}
]})



