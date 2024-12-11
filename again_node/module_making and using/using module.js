console.log('This the module')
const Module_file = require("./making Module") // now we are including the from where we are using the module  in a var
// to use the module syntaxt = "file_var_name.module name(give the value)"
console.log(Module_file.multiply(3,41,5)) // here the "Module_file" is the var in where the file is store and "multiply" is the name of the module
console.log(Module_file.avg([3,405,5,5])) // like this we can use multiple module from the same file



// importan ----------- below

// const Module_file = require("./anoter name of the file") 
//you can include multiple file and you can use multiple module from diffrent files

