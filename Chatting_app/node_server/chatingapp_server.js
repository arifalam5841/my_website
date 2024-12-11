// const { Socket } = require('socket.io')

const io = require('socket.io')(800, {
    cors: {
      origin: '*',
    }
  });


const users = {}

//below function for whenever the users join it will whatever will give command to it 
io.on('connection', socket =>{ 
    socket.on('new-user-joined', name =>{ // this 'name' will be send in the below 'name' param
                // console.log('"'+name+'"'+ "- Joined")
                console.log(socket.id); /// it will print in the terminal not in google devtool
                 users[socket.id]  = name; // it append a var 'name' in the users array
                // socket.broadcast.emit('user-joined', name) /* the 'name' is a paranthesis in client fiel 
                  // we can add any value to just like  we do in funtions*/
                  socket.broadcast.emit('user-joined', name);
    })

    socket.on('send', message =>{ // this function is for when someone send the message 
        socket.broadcast.emit('recieve', {message: message, name: users[socket.id]})
    })
})

