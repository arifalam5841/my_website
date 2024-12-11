let changing_img_sec = document.getElementById("changing_img_sec")
let first_line = document.getElementById("first_line")
let secondline = document.getElementById("secondline")
let image = document.getElementById("images")

let nams = [

{img : "https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/education/hero/top-ten-foods-for-health-2x.jpg" , first_line : "Welcome to Foodies" , sec_line : "here is something new"},
{img : "https://post.healthline.com/wp-content/uploads/2020/08/reasons-to-eat-real-food-1200x628-facebook-1200x628.jpg" , first_line : "Here Vegitable are come" , sec_line : "from america"},
{img : "https://dentistry.uic.edu/wp-content/uploads/sites/741/2020/10/food-StockSnap_NAJN9P6LHG-1090x595.jpg" , first_line : "After having food" , sec_line : "You will get a dilicious Desert"},

]
let a = 0

function chages_name(){
    a++
    if(a == nams.length){
        a=0
    }
    // image.src = nams[a]

    changing_img_sec.style.backgroundImage = `url(${nams[a].img})`
    first_line.textContent = nams[a].first_line
    sec_line.textContent = nams[a].sec_line

    
}

setInterval(chages_name, 3000)


// code of items section

let items_cont = document.getElementById("items_section")

let items_list = [
 {name:'Polenta', img : "https://www.downloadclipart.net/large/grilled-food-png-transparent-image.png", rate : "500", restaurant_name : "Taj hotel" },
 {name:'Chicken tikka', img : "https://www.pngkit.com/png/full/933-9333180_free-png-grilled-chicken-png-png-image-with.png", rate : "600", restaurant_name : "Krishna hotel" },
 {name:'Burger', img : "https://www.pngall.com/wp-content/uploads/2016/03/Food-Free-Download-PNG.png", rate : "500", restaurant_name : "Macdonals" },
 {name:'kadi', img : "https://freepngimg.com/thumb/food/1-2-food-free-png-image-thumb.png", rate : "400", restaurant_name : "Aysha hotel" },

]


for(i = 0; i<items_list.length; i++){
let item = document.createElement("div")
let image = document.createElement("img")
let discription = document.createElement("span")
let dish_name = document.createElement("h3")
let price = document.createElement("h4")
let hotel = document.createElement("h4")
let order = document.createElement("button")

item.append(image, discription)
image.src = items_list[i].img
discription.append(dish_name, price, hotel, order)
dish_name.textContent = items_list[i].name
price.textContent = '$'+items_list[i].rate
hotel.textContent = items_list[i].restaurant_name
order.textContent = "Order"

items_cont.append(item)
}