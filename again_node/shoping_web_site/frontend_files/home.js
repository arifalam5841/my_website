let items_cont = document.getElementById("items_section")
let order_sec = document.getElementById("ordering_section")
let cut_btn = document.getElementById("cut_btn")
let submit_btn = document.getElementById("submit_btn")
let items_image = document.getElementById("item_image")
let items_list = [
 {image : "https://freepngimg.com/thumb/dress/31612-1-dress-transparent-picture.png", items_name: "Frok", price : "200", dis : "fabric : cotton , size.." },
 {image : "https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png", items_name: "T-shirt", price : "441", dis : "polester " },
 {image : "https://www.pngall.com/wp-content/uploads/5/Shirt-PNG-Image-File.png", items_name: "Shirt", price : "5113", dis : "men shirt size: M" },
 {image : "https://www.freeiconspng.com/thumbs/blank-t-shirt-png/blank-t-shirt-png-8.png", items_name: "T-shirt", price : "4455", dis : "color : grey , size : M" }
 

]

for(i =0; i< items_list.length; i++){
    let item = document.createElement("div")
    let img = document.createElement("img")
    let discription = document.createElement("span")
    let names = document.createElement("h3")
    let rate= document.createElement("h4")
    let disc = document.createElement("p")
    
    item.append(img, discription)
    discription.append(names,rate,disc)

    img.src = items_list[i].image
    names.textContent = items_list[i].items_name
    rate.textContent = "$"+ items_list[i].price
    disc.textContent = items_list[i].dis

    items_cont.append(item)
    item.dataset.itemIndex = i
    item.addEventListener("click", function(){
        const items_index = event.currentTarget.dataset.itemIndex;
        order_sec.style.display = "flex"
        items_image.src = items_list[items_index].image
    })
}

cut_btn.addEventListener("click", function(){
    order_sec.style.display = "none"
})






// POP UP MESSAGE CODE
let popup_ordered = document.getElementById("popup_msg_ordered")

function popup_msg(){
    popup_ordered.style.top = "-50px"
}
submit_btn.addEventListener("click", function(){
    
    order_sec.style.display = "none"
    popup_ordered.style.top = "50px"
    setTimeout(popup_msg,1500)
})


