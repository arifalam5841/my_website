// synchronous mean the code will execute  line
// Asynchronous mean the code will execute  line and not guarateed

const fs_var = require("fs")

fs_var.readFile('again_node/example_file.txt', 'utf-8', (err, data) => { //this a Asynchromous means it will run the func after read the file  the "data" is the element of the file that the readfielsync is reading
    console.log(data)
    fs_var.writeFileSync('again_node/arif.txt', data) // like this you can make a file and and element in that file
})

console.log('hii i am learnig coding')//it will also run if the above code will not run because the above code a synchromous code

// let a = fs_var.readFileSync('again_node/example_file.txt', "utf-8") - this a synchromous code  beacause it is  ' readfileSyc'
//Sync means synchromous 