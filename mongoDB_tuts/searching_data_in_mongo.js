// SO IN TUT WE WILL LEARN HOW SEARCH DATA IN MONGO //

// to see the all the datas in your database you have to write blow line
//syntax - show collectios

// i made a data name 'student' in this i made a database name "students" in mogo
db.students.insertMany([
    {name : "arif", age : 14, std : 8, subject : "science"},
    {name : "rehan", age : 24, std : 12, subject : "art"},
    {name : "sham", age : 11, std : 6, subject : "commerce"},
    {name : "arif", age : 14, std : 6, subject : "sst"}
])

// filtering-

// in 'students' databse all the object will be print whose age == 11 useing this below line 
db.students.find({age: 11})

// you can make diffrent conditions just like above condition see below
db.students.find({name: "arif"})
db.students.find({std: 6})
db.students.find({subject: 'sst'})


// "{$gte:}"  willl all the oject who is greater or equal than the value what you gave 
// you have always write these codintion in {} curli bracket
// exmaple is blewo

db.students.find({age : {$gte:11} })
// in above code will  will get the objects whose 'age' is greater or equal to the "11"

db.students.find({age : {$gt:11}})
// in above you will get the  objects whose 'age' is greater the 11

db.students.find({std : {$lte:8}})
// in above you will get the ojects whose 'std' in lower or equal tthe '8'

db.students.find({std : {$lt:8}})
// in above you will get the onjects whose 'std' is lower then "8"


// MULTIPLE CONDITION

//lilke below you can make multiple coditions 

db.students.find({age : {$gte:10}, name : "arif", subject : "science",std : {$gt : 6}})
// in above you will get the  ojects whose "age" is greater than "10", "name" equal to "arif"
// 'subject' equal to 'science' ,  std greater than '6'


// or operator-

db.students.find({$or:[{age : {$gt: 6}}, {std : {$lt: 8}}]})
//in this above you will get the objets whose 'age' is greater than '6' or std 'lower' than '8'


// Below IMPORTANT

db.students.find({age : {$gt: 6}}, {name: 1,subject :1})
//in above you will only get the "name" and "sumject" of those object whose "age" greater than "6"
// to get the value you have to write "1" like above "name : 1"

// another example of get thing the value of the oject
db.students.find({name : "arif"}, {age: 1,subject :1})



db.employees.find({age : {$gt : 10}}, {name : 1, profession : 1})