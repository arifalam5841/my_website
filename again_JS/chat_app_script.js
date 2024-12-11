
let menu_btn = document.getElementById("menu_btn")
let menu = document.getElementById("menu")
menu_btn.addEventListener("click", function () {
    if (menu.style.height == "0px") {
        menu.style.height = "fit-content"
    }
    else {
        menu.style.height = "0px"
    }
})

document.getElementById('search_btn').addEventListener("click", function () {
    document.getElementById("title").style.display = "none"
    document.getElementById("menu_btn").style.display = "none"
    document.getElementById("search_btn").style.display = "none"
    document.getElementById("search_bar").style.display = "block"
    document.getElementById("back_title_btn").style.display = "block"
    menu.style.height = "0px"
})


document.getElementById("back_title_btn").addEventListener("click", function () {
    document.getElementById("title").style.display = "block"
    document.getElementById("menu_btn").style.display = "block"
    document.getElementById("search_btn").style.display = "block"
    document.getElementById("search_bar").style.display = "none"
    document.getElementById("back_title_btn").style.display = "none"
    menu.style.height = "0px"
})


// code of user section --------------

let user_section = document.getElementById("users_section")


let users_list = [
    { user_name: "Arif", user_last_mesg: "hi !, how are you", profiel_pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { user_name: "Max", user_last_mesg: "did you done the homework ?", profiel_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iD6awG7ugwALMWGiwNVjjIPGu58gfRKhEg&usqp=CAU" },
    { user_name: "Rehan", user_last_mesg: "come to my home we have fun", profiel_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FuEJbKwDdaz1h387130xmYkAIQbZpahhbQ&usqp=CAU" },
    { user_name: "Tyson", user_last_mesg: "what are you doing bro don't you know that i have shifted to delhi", profiel_pic: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg" },
    { user_name: "Teacher", user_last_mesg: "Tomorrow homework is science chapter 5", profiel_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU" },
    { user_name: "mom", user_last_mesg: "Come home fast", profiel_pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLHvzyqlpe7Aw_qH5ZR5fvjErwjzNuqIlc6A&usqp=CAU" },
]




for (i = 0; i < users_list.length; i++) {


    let user_id = document.createElement("a")
    let profile_img = document.createElement("img")
    let name_contianer = document.createElement("span")
    let user_name = document.createElement("h3")
    let user_last_text = document.createElement("p")
    let user_profile_contaienr = document.createElement("div")

    user_section.append(user_id)
    user_id.append(user_profile_contaienr, name_contianer)
    name_contianer.append(user_name, user_last_text)
    user_profile_contaienr.append(profile_img)
    profile_img.src = users_list[i].profiel_pic
    user_name.textContent = users_list[i].user_name
    user_last_text.textContent = users_list[i].user_last_mesg
    user_id.href = "#"

    
    // "IMPORTANT below like below you can shift the item in another box"------------

    // user_id.addEventListener("click", function(){
    //   ad_to_cart_list.appendChild(user_id) - like thsi you can shift a item one box to another
    // })




    if (users_list[i].user_last_mesg.length > 27) {
        user_last_text.textContent = users_list[i].user_last_mesg[0] + users_list[i].user_last_mesg[1] + users_list[i].user_last_mesg[2] + users_list[i].user_last_mesg[3] + users_list[i].user_last_mesg[4] + users_list[i].user_last_mesg[5] + users_list[i].user_last_mesg[6] + users_list[i].user_last_mesg[7] + users_list[i].user_last_mesg[8] + users_list[i].user_last_mesg[9] + users_list[i].user_last_mesg[10] + users_list[i].user_last_mesg[11] + users_list[i].user_last_mesg[12] + users_list[i].user_last_mesg[13] + users_list[i].user_last_mesg[14] + users_list[i].user_last_mesg[15] + users_list[i].user_last_mesg[16] + users_list[i].user_last_mesg[17] + users_list[i].user_last_mesg[18] + users_list[i].user_last_mesg[19] + users_list[i].user_last_mesg[20] + users_list[i].user_last_mesg[21] + users_list[i].user_last_mesg[22] + users_list[i].user_last_mesg[23] + users_list[i].user_last_mesg[24] + users_list[i].user_last_mesg[25] + users_list[i].user_last_mesg[26] + "..."

    }


    user_id.dataset.cartIndex = i
    user_id.addEventListener("click", adding_item, false)


}






//---------------------------- add to cart code --------------------------------------------------
let added_cart_list = [


]

let cart_section = document.getElementById("ad-to-cart-box")

console.log(added_cart_list)

function adding_item(event) {
    send_btn.textContent = "Send"
    // send_btn.disabled = false
    const user_index = event.currentTarget.dataset.cartIndex;
    added_cart_list.push(users_list[user_index])

    let user_id = document.createElement("a")
    let profile_img = document.createElement("img")
    let name_contianer = document.createElement("span")
    let user_name = document.createElement("h3")
    let user_last_text = document.createElement("p")
    let user_profile_contaienr = document.createElement("div")

    cart_section.append(user_id)
    user_id.append(user_profile_contaienr, name_contianer)
    name_contianer.append(user_name, user_last_text)
    user_profile_contaienr.append(profile_img)
    profile_img.src = added_cart_list[user_index].profiel_pic
    user_name.textContent = added_cart_list[user_index].user_name
    user_last_text.textContent = added_cart_list[user_index].user_last_mesg
    user_id.href = "#"

}


// recieving box script ----------------------------


let recieving_list = [


]

let recieving_section = document.getElementById("recieving-items-from-cart-section")
let send_btn = document.getElementById("send-btn")




function send_text() {

    send_btn.textContent = 'please ad item'


}
send_btn.addEventListener("click", function () {

    if (added_cart_list.length == 0) {
        send_btn.textContent = 'first ad items'

        setTimeout(send_text, 1200)
        send_btn.disabled = false
        
        
        send_btn.style.backgroundColor = "white"
        send_btn.style.color = "black"
        
    }

    else {


        // send_btn.textContent = 'send'
        send_btn.disabled = true
        send_btn.textContent = "sent !"
        send_btn.style.backgroundColor = "blue"
        send_btn.style.color = "white"

    }


    

    for (i = 0; i < added_cart_list.length; i++) {
        recieving_list.push(added_cart_list[i])
    }



    for (i = 0; i < recieving_list.length; i++) {

        let user_id = document.createElement("a")
        let profile_img = document.createElement("img")
        let name_contianer = document.createElement("span")
        let user_name = document.createElement("h3")
        let user_last_text = document.createElement("p")
        let user_profile_contaienr = document.createElement("div")

        recieving_section.append(user_id)
        user_id.append(user_profile_contaienr, name_contianer)
        name_contianer.append(user_name, user_last_text)
        user_profile_contaienr.append(profile_img)
        profile_img.src = recieving_list[i].profiel_pic
        user_name.textContent = recieving_list[i].user_name
        user_last_text.textContent = recieving_list[i].user_last_mesg
        user_id.href = "#"
    }
    while(added_cart_list.length >0){
        added_cart_list.pop()
    }



})





