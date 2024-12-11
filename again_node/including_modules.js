const fs_var = require("fs")  //"require" is use to include a module   we have to type the module name in the ("module_name")
const { addAbortSignal } = require("stream")

const text = fs_var.readFileSync("again_node/example_file.txt","utf-8") //like this you have to give the path of the file and you have to set "utf-8 "in the secondn value 
let arif = text.replace("arif", "alam" ) //  like this you can replace elments in a file - first value is what element you are replacing second vaue is by what you are replacing

console.log(arif)

console.log("creating new file.....")
fs_var.writeFileSync("again_node/rehan.html", arif)// making a new file first value is for  path and name second value is for content



// let a =0

// function adding(){
//     a++
// }
// setInterval(adding,1000)