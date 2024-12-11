// const express = require("express");
// const path = require("path");
// const fs = require("fs");
// const app = express();
// const port = 80;

// let second = fs.readFileSync("./second.html", "utf-8")

// let home = path.join(__dirname, "./public") 
// console.log(home)
// app.use(express.static(home))

// app.get('/', (req, res) => {
//     res.send('by')
// })
// app.post('/', (req, res) => {
//     res.send(second)
// })



// app.listen(port, () => {
//   console.log('YouChat !!');
// });

function testJS()
{

var b = document.getElementById('name').value

document.getElementById('here').innerHTML = b;

}
