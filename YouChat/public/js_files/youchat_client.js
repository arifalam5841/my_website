// const { send } = require("process")

// https://socket.io/docs/v3/rooms/
const socket = io('http://localhost:500')

let users_msg_list = [
   // {name : 'arif alamn', socket_id : 'sakjfdhsd65455', messages :[]}
]



// USER NAME
let online_user_name = document.getElementById("user_name")

// LOGIN 
let login_form = document.getElementById("login_container")
let login_user_name_input = document.getElementById("user-name")

// HOME USERS LIST CONTAINER
let users_container = document.getElementById("users_list")
let home_page = document.getElementById("home_container")

// CHATS CONTAINER
let chats_cont = document.getElementById("chats_container")
let chatting_page = document.getElementById("chatting_cont")
let reciever_name = document.getElementById("reciever_name")
let reciever_id = document.getElementById("reciever_s_id")
let msg_send_form = document.getElementById("send_chat_sec")
let sended_msg = document.getElementById("chat-input")
let sending_btn = document.getElementById("sending-btn")
let back_home = document.getElementById("back")


function apnd_users(username, id) {

   const user_cont = document.createElement("div")
   user_cont.classList.add("user")
   const profile_cont = document.createElement('div')
   profile_cont.setAttribute("id", "img-cont")
   const profile = document.createElement("img")
   profile_cont.append(profile)
   profile.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLfn6eqrsbTp6+zg4uOwtrnJzc/j5earsbW0uby4vcDQ09XGyszU19jd3+G/xMamCvwDAAAFLklEQVR4nO2d2bLbIAxAbYE3sDH//7WFbPfexG4MiCAcnWmnrzkjIRaD2jQMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMw5wQkHJczewxZh2lhNK/CBOQo1n0JIT74/H/qMV0Z7GU3aCcVPuEE1XDCtVLAhgtpme7H0s1N1U7QjO0L8F7llzGeh1hEG/8Lo7TUmmuSrOfns9xnGXpXxsONPpA/B6OqqstjC6Ax/0ujkNdYQQbKNi2k64qiiEZ+ohi35X+2YcZw/WujmslYewiAliVYrxgJYrdwUmwXsU+RdApUi83oNIE27YvrfB/ZPg8+BJETXnqh9CVzBbTQHgojgiCvtqU9thFJg/CKz3VIMKMEkIXxIWqIpIg2SkjYj+xC816mrJae2aiWGykxRNsW0UwiJghJDljYI5CD8GRiCtIsJxizYUPQ2pzItZy5pcisTRdk/a9m4amtNNfBuQkdVhSaYqfpNTSFGfb9GRIakrE2Pm+GFLaCQPqiu0OpWP+HMPQQcgQMiQprWXNmsVwIjQjYi/ZrhAqNTCgr2gu0Jnz85RSSjso0HkMFZ0YZjKkc26a/jlmh9JiDyDxi9oeorTYAzZkwwoMz19pzj9bnH/GP/+qbchjSGflneWYhtTuKdMOmNKZcJ5TjInQKcYXnESd/jQxy0ENpULTNGOGgxpap/oyw9pbUAqhfx2Dbkhovvfgz4iUzoM9+GlK6/Mh4q29hyC1mwro30hpVVLPF9wYQr71RazOeM5/cw81iBRD+A03aM9/C/obbrKjbYSpCmIVG3qT/Q8oeUo3Rz0IL7vI1tEbCB9pSiu8I/aV8x3Kg/BGWrWp4ZVs0nZfmAoEG4h/61yHYIJiFSl6Q0Vk6tTW1N8kYp8hdOkfHYYMXd2Qft+8CYwqYDSKvqIh+MCF8Wgca2u/cwdgeW3TtuVn6+1oBs3yLo5C2JpK6CvQzGpfUkz9UG/87gCsi5o2LIXolxN0FbwAsjOLEr+YJmXn7iR6N0BCt5p5cMxm7eAsfS+/CACQf4CTpKjzgkvr2cVarVTf96372yut7XLJ1sa7lv6VcfgYrWaxqr3Wlo1S6pvStr22sxOtTNPLzdY3nj20bPP+ejFdJYkLsjGLdtPBEbe/mr2bQKiXWJDroA+vtzc0p9aahuwqHMDYrQEXHEw9jwQl3drMpts9JBU1SdktPe5FBRdJQ6bwXBpa57ib2A8kukQDzMjh++Uo7Fo6Wd02Pkf4fknqoo4HtvAIjsqUcjx6DIPgWCaOML9rKI/oqD9/lgNrn+eF+p7j8tnzHBiR7+kdUGw/+V1Kzkc75mMy6U+FMaxjPibiM1U1uGM+puInHpmALZCgP4pt7i840MV8+0R1zPsRB6UTcqpizncYwZ89syDydfyWCwXB1l8/zRNGWbTG/GHKUm9AkxHMc/EGSk3z2+ArEhPEV5TUBLEvUGFcjEUH80J/jveTGOAJEljJbILWGQT3zRYiwuKsUXN1EEJAzBhRJFll7mBUG7KD8EqPkKekBREaL8hMDZLQSG6AQjtHPYmvTQnX0TtpC1SYCe2YdkkyLP3jj5BSbKiuR585eQhTgoje6yIb0Yb0C+mV6EYvebqw5SDy2WmubogZiF2AVxPC2FpDf8H2Q9QWo6IkjUxTWVEI3WY/wrCeSuqJ+eRWzXR/JXwgVjUMozbCOfoEZiSiKVGepqv5CJ8RyR4D7xBeamqa7z3BJ/z17JxuBPdv93d/a2Ki878MMAzDMAzDMAzDMAzDMF/KP09VUmxBAiI3AAAAAElFTkSuQmCC"
   const user_detail_cont = document.createElement("div")
   user_detail_cont.setAttribute("id", "name-lastmsg-cont")
   const user_heading = document.createElement("h3")
   user_heading.innerHTML = username
   const last_msg_cont = document.createElement("p")
   last_msg_cont.setAttribute("class", "last-msg")
   last_msg_cont.innerHTML = "hiii !!!"
   const socket_id_cont = document.createElement("span")
   socket_id_cont.setAttribute("id", "socket-id")
   socket_id_cont.innerHTML = id
   user_detail_cont.append(user_heading, last_msg_cont, socket_id_cont)
   user_cont.append(profile_cont, user_detail_cont)

   // appending user in the users list page
   users_container.append(user_cont)

   user_cont.addEventListener("click", function () {
      let a_id = socket_id_cont.innerHTML
      console.log(a_id)
      home_page.style.display = "none"
      chatting_page.style.display = "flex"
      reciever_name.innerHTML = user_heading.innerHTML
      reciever_id.innerHTML = socket_id_cont.innerHTML

      for (i = 0; i < users_msg_list.length; i++) { //APENDING THE ALL MSGS IN THE MSG CONT WHEN WE CLICK ON THE USER
         if (a_id == users_msg_list[i].socket_id) {
            for (a = 0; a < users_msg_list[i].messages.length; a++) {
               let msg_cont = document.createElement("div")
               msg_cont.classList.add('message')

               // giving the class name to the chat
               msg_cont.classList.add(users_msg_list[i].messages[a].class)
               // appeding the message in the chat 
               msg_cont.textContent = users_msg_list[i].messages[a].message

               // appending the users chat in chats contianer
               chats_cont.append(msg_cont)
            }
         }
      }
   })


   // socket io funcs below

}


// chatting section's back btn click event
back_home.addEventListener("click", function () {
   reciever_id.innerHTML = ""
})

// loging form submting 
login_form.addEventListener('submit', (e) => {
   e.preventDefault()
   login_form.style.display = "none"
   home_page.style.display = "flex"
   // name of the user which has entered in the input section in login form 
   const main_user_name = login_user_name_input.value;

   //like this you set value to multiple params 
   socket.emit('new-user-joined', main_user_name) // this for the main func
   // user-joined func below
   online_user_name.innerHTML = main_user_name

   // APPEDING USERS TO ALL USERS WHEN SOMEONE JOIN FROM THE 'USERS' ARRAY WHICH IS IN 'BACKEND'
   socket.on('appending-all-users', users => {
      // LIKE BELOW U CAN MANIPULATE A 'ARRAY' FROM A 'BACKEND' 
      for (i = 0; i < users.length; i++) {
         users_msg_list.push(
            // adding the all users who has already logged in , in the message array  
            { name: users[i].username, socket_id: users[i].id, messages: [] }
         )


         apnd_users(users[i].username, users[i].id) //  APPENDING all USERS  IN THE USERS CONTAINER

      }

      console.log(users_msg_list)



   })

})








// APPEDING USERS TO ALL USERS WHEN SOMEONE JOIN BY BROADCASTING 

// below, this 'append_users' has been made a func which will be used in the 'user-joined' func
const append_users = (user_name, id) => { // this function will be run when the user join the chat room 

   users_msg_list.push(
      { name: user_name, socket_id: id, messages: [] }
   )


   apnd_users(user_name, id)

}





socket.on('user-joined', data => { // this for the  func which is in the main func

   var id = data.used_s_id
   var name = data.names
   // giving the to func
   append_users(name, id)
})


// SENDING  MSG FUNC
// making func
const send_msg = (mssg, position) => {

   let msg_cont = document.createElement("div")
   msg_cont.classList.add('message')
   // it is a sended 
   msg_cont.classList.add(position)
   // adding the sended msg
   msg_cont.textContent = mssg
   // adding the msg to the sender's chats_cont
   chats_cont.append(msg_cont)
   console.log(users_msg_list)

}


// recieving msg FUNC
// making the func
const r_send_msg = (mssg, position, m_id) => { // the 'm_id' is your own id it means it the id of the sender not the reciever
   let reciever_id = document.getElementById("reciever_s_id")
   let r_id = reciever_id.innerHTML // here we talkint abou the reciever's 'reciever_id' it means if the reciver has opened your chat section so the there the 'reciever_id' wil be yours
   // now if the reciever has opened your chat section the the r_id will be equal to m_id 
   // so if r_id == m_id then then only the msg will append in the reciever's chat section else it will only add in the user msg array  
   if (r_id == m_id) {
      let msg_cont = document.createElement("div")
      msg_cont.classList.add('message')
      msg_cont.classList.add(position)
      msg_cont.textContent = mssg
      chats_cont.append(msg_cont)
   }


   // if your id is in the reciever's msg array the adding the sent msg in reciever's msg array
   for (i = 0; i < users_msg_list.length; i++) {
      if (m_id == users_msg_list[i].socket_id) {
         // adding the sent msg in reciever's msg array
         users_msg_list[i].messages.push({ message: mssg, class: 'left' })
      }
   }


   console.log(users_msg_list)
}



// now we are using the send func and the recieve func which we had made 
// when we send the msgs
msg_send_form.addEventListener('submit', (e) => {
   e.preventDefault()
   let msg = sended_msg.value // the sended msg
   sended_msg.value = "" // making the jinput none after sedings
   let id = reciever_id.innerHTML // id the reciever

   socket.emit('send', msg, id) // useing 'send' func
   send_msg(msg, "right") // using the 'send_msg' func 

   //  if the reciever's id is in sender's msg array then adding the sent msg in sender's msg array
   for (i = 0; i < users_msg_list.length; i++) {
      if (id == users_msg_list[i].socket_id) {
         users_msg_list[i].messages.push({ message: msg, class: 'right' })
      }
   }

})


// using the 'receive' func from the server which will work in the receiver side 
socket.on('receive', data => { // the is array which we have gave in the server side
   r_send_msg(data.message, "left", data.your_id)
})



