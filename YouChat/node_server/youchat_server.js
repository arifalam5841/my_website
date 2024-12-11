
// const io = require('socket.io')(500, {
//   cors: {
//     origin: '*',
//   }
// });



// --IMPORTANTS

// To run th terminal click on the play button on top right 
// USE 'cd .\folder-name\file-name\' to open a folder or file in terminal
// USE 'code .' to open a folder in another app after opning the folder in terminal then use it
// USE 'nodemon filename' after opning the folder in the terminal
// USE ' npm init' TO INCULDE NPM IN TERMINAL
// USE 'npm i name_of_programe' to install any thing
// USE 'npm uninstal name_of_programe' to uninstall any thing

let express = require('express');
// let events = require('./routes/events');
let app = express();
let server = app.listen(500);
let fs = require('fs')
const path = require('path') //" VERY IMPORTAN " , BY USING THIS WE CAN INCULDE ANY 'FILE' WHITOUT READING THAT FILE BY 'fs'
let io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

// inculding file without reading file 
// The 'PUBLIC' is the folder where the css and js folders are the and the index.html also and all should be in that file  
let home = path.join(__dirname, "../public") // "__dirname" is for just a 'FOLDER' , for a file - "__filename"

// THE THE NAME OF THE HOME PAGE of the wed site SHOULD BE "index.html" then only it will run
app.use(express.static(home))


app.get("/", (req, res) => {
  res.send('helo')
})



// users data array he re all data of users will save when login
const users = []

// function of when user will connet to website
io.on('connection', socket => {
  // LIKE THIS YOU CAN SEND MULTIPLE PARAMS 
  const id = socket.id // id of the user
  socket.on("new-user-joined", (name) => { // the name wil be get from the client side page
    // console.log(name)
    // get all users how are all ready loged in , in the chat section 
    socket.emit("appending-all-users", users) // it should be on the top 
    // 'emit' function will only work in 'on' function



    // adding the user in the 'users' array
    users.push({
      username: name,
      id: socket.id
    })

    console.log(users)


    //  emiting the users id to all the users who are logged in , in their chat section
    socket.broadcast.emit('user-joined', { names: name, used_s_id: id }) /* name of the params of the both 'socket.on' and 'emit' should be different
    socket.broadcast.emit('user-joined',{this.users, names : users[len].username, used_s_id : users[len].id}) /* name of the params of the both 'socket.on' and 'emit' should be different
     */

  })


  // -- IMPORTANT --
  // in below the 'to' is the socket_id of the reciever whom we are sending the data or msg
  // and the 'message' is the message which we are send to reciever
  // we will give data to both of the in client side
  socket.on('send', (message, to) => { // 

    console.log(message + to)
    console.log(id)

    // sending msg  
    // below, in 'to' there will be the id of reciever
    socket.to(to).emit('receive', { message: message, your_id: id }) // we can push the message to the user's msg array list

  })




  // ON DISCONNECT 

  socket.on('disconnect', () => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === socket.id) {
        users.splice(i, 1);
      }
    }
  });
})


// server.listen(500, () => {
//   console.log('YouChat !!');
// });