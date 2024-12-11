const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const socket = require('socket.io')
const io = socket(server)

let users = []

const messages = {
    general : [],
    random : [],
    jokes : [],
    JavaScript : []
}

io.on('connection', socket =>{
    socket.on("join server", (username) =>{
        const user = {
            username,
            id: socket.id,
        };
console.log(users[i].user.username)
        users.push(user);
        io.emit("new user", users)
    }); 

    socket.on("join room", (roomName, cb)=>{
        socket.join( ) 
        cb(messages[roomName])
        socket.emit("joined", messages[roomName])
    });

    socket.on("send message", ({content, to , sender, chatname, isChannel})=>{
        if(isChannel){
            const payload = {
                  content,
                  chatname,
                  sender,
            };
            socket.to(to).emit("new message", payload);
        }

        else{
            const payload = {
                content,
                chatname : sender,
                sender,
            }; 
            socket.to(to).emit("new message", payload)
        }

        if(messages[chatname]){
            messages[chatname].push({
                sender,
                content
            });
        }
    }); 

    socket.on("disconnet", ()=>{
        users = users.filter(u => u.id !== socket.id);
        io.emit("new user", users)
    })
});

server.listen(1337, ()=> console.log('server is running  on port 1337'))