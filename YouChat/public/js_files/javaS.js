let back = document.getElementById("back")
let home = document.getElementById("home_container")
let chatting = document.getElementById("chatting_cont")
let contt = document.getElementById("chats_container")

back.addEventListener("click", function (){
    home.style.display = "flex"
    chatting.style.display = "none" 
    contt.innerHTML = " "
})


