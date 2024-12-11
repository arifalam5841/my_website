

// Include fs module
const fs = require('fs');  //fs is a module

// Calling the readFileSync() method
// to read 'input.txt' file
let read = fs.readFileSync("Node_js/arif.txt","utf-8") //important  to read file from a folder you have to do = "foldername/filename" 
 read = read.replace("Arif", "rohan") //to change the content of a file = fisrt set content that you have to change and in second content that you wnat to set

// Display the file data
console.log(read);

console.log('loading new file content....')
// you have to save that file whose you changing the content
 fs.writeFileSync("Node_js/new.txt", read) //to set content in other file
