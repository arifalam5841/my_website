
const express = require('express');
const app = express();
const path = require("path")
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


let file = fs.readFileSync("./again_JS/Google.html", "utf-8") // like this u can get file from another folder also 
let file2 = fs.readFileSync("./again_JS/file_name", "utf-8")

server.get("/", (req, res)=>{
  res.send(file)
  })

app.post("/", (req,res)=>{ //like this you can make multiple pages
    res.send(file2)
})

//      ----------------scoket io from below --------------------

io.on('connection', (socket) => {
  console.log('a user connected');
});



server.listen(3000, () => {
  console.log('listening on *:3000');
});

