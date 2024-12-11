let home_btn = document.getElementById("home_btn")
let restrn_btn = document.getElementById("restrns_btn")


function home_restrnt(main_btn, second_btn) {
    main_btn.addEventListener("click", function () {
        main_btn.style.background = "rgb(211, 62, 42)"
        main_btn.style.color = "white"

        second_btn.style.background = "#153944"
        second_btn.style.color = "gray"
    })
}

home_restrnt(home_btn, restrn_btn)
home_restrnt(restrn_btn, home_btn)


//----------------------- MAIN ITEMS AND CONTAINER STYLE  -----------------//

let main_container = document.getElementById("primery_items_container")

let main_items = [
    { restaurant_name: "Aysha retaurant", food_image: "https://post.healthline.com/wp-content/uploads/2018/04/steak-meat-1200x628-facebook-1200x628.jpg", food_category: "non-veg", food_name: "Chincken Tikka", rating: 4.5, Qty: 5, food_price: 500 },
    { restaurant_name: "Krish chineese", food_image: "https://i.ytimg.com/vi/Ql8h49eP-gA/maxresdefault.jpg", food_category: "veg", food_name: "Chineese fried rice", rating: 4.5, Qty: '1/2', food_price: 90 },
    { restaurant_name: "Domino's", food_image: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg", food_category: "non-veg", food_name: "Neapolitan Pizza", rating: 4, Qty: 1, food_price: 150 },
    { restaurant_name: "KFC", food_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cPJjafa_paKf9bPPKuO1OZ2yGJrh9HF6RA&usqp=CAU", food_category: "non-veg", food_name: "Fried chicken", rating: 5, Qty: 4, food_price: 200 },
    { restaurant_name: "Street masala", food_image: "https://foodalltime.com/wp-content/uploads/2018/05/Best-Way-To-Learn-How-To-Make-Chole-Bhature-9-1.jpg", food_category: "veg", food_name: "Chole bhature", rating: 2, Qty: 2, food_price: 80 },
    { restaurant_name: "Chineese Dhaba", food_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUrc_nKlkGKD3qTLNjOfWYWz0e5R5lyS6pg&usqp=CAU", food_category: "veg", food_name: "Noodles", rating: 4.5, Qty: '1/2', food_price: 80 },
    { restaurant_name: "Meat street", food_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSU6Uew7aIN0Q_gtnAI-ATgwuLlbcJJlxchQ&usqp=CAU", food_category: "non-veg", food_name: "Grill Meat", rating: 1, Qty: 3, food_price: 700 },
]

// SHUFFLING THE ITEMS 
main_items.sort((a,b) => 0.5 - Math.random());

for (i = 0; i < main_items.length; i++) {
    // creating elements
    let item_container = document.createElement("div")
    let food_img_container = document.createElement("div")
    let food_img = document.createElement("img")
    let item_discription = document.createElement("div")
    let restaurant_food_name_cont = document.createElement("div")
    let restaurant_name_addbnt_cont = document.createElement("span")
    let restaurant_name = document.createElement("h3")
    let add_to_cart_btn = document.createElement("button")
    let add_to_cart_btn_img = document.createElement("img")
    let food_category_section = document.createElement('span')
    let food_category = document.createElement("h5")
    let food_category_dot = document.createElement("i")
    let food_name = document.createElement("h5")
    let rating_qty_price_box = document.createElement("div")
    let rating_box = document.createElement("span")
    let sepreting_line = document.createElement("span")
    let sepreting_line2 = document.createElement("span")
    let Qty_box = document.createElement("span")
    let price_box = document.createElement("span")


    // rating stars images
    let full_star1 = document.createElement("img")
    full_star1.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAABDklEQVQokX2Qr0/DUBDHP1fahAkCqIGrIOC6JTUF3DKNGSFhYDBo/gUcfqropigUkgRHsGMJDk/mmIL94B2iZS30jTP37nv3ubt3YDFNg5amwb2mQcuWd20i6BlIG+UNePiblUp5HHqsTIfAOvCO+1WXo5dJucapDFmdtHMAYI3ZUmVF0ZvGFarnJW0ZqJXiD+CzIOTaxaiPzDvbrPariVHfoTs4RrkApv+AADOUS7ydk/khNGnu45hboG4BhhinI6f9Rygf4rX/BGoWTNEsn1kBbTf2QDYXQBtsNXerENop3vIMHOQ+rzSHFkh8QEF7jEeRdAd3jEcRaC/Txa8uHYeeJkFk/VASRBqH3k/8Dc2BUXcEM3OHAAAAAElFTkSuQmCC"
    let full_star2 = document.createElement("img")
    full_star2.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAABDklEQVQokX2Qr0/DUBDHP1fahAkCqIGrIOC6JTUF3DKNGSFhYDBo/gUcfqropigUkgRHsGMJDk/mmIL94B2iZS30jTP37nv3ubt3YDFNg5amwb2mQcuWd20i6BlIG+UNePiblUp5HHqsTIfAOvCO+1WXo5dJucapDFmdtHMAYI3ZUmVF0ZvGFarnJW0ZqJXiD+CzIOTaxaiPzDvbrPariVHfoTs4RrkApv+AADOUS7ydk/khNGnu45hboG4BhhinI6f9Rygf4rX/BGoWTNEsn1kBbTf2QDYXQBtsNXerENop3vIMHOQ+rzSHFkh8QEF7jEeRdAd3jEcRaC/Txa8uHYeeJkFk/VASRBqH3k/8Dc2BUXcEM3OHAAAAAElFTkSuQmCC"
    let full_star3 = document.createElement("img")
    full_star3.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAABDklEQVQokX2Qr0/DUBDHP1fahAkCqIGrIOC6JTUF3DKNGSFhYDBo/gUcfqropigUkgRHsGMJDk/mmIL94B2iZS30jTP37nv3ubt3YDFNg5amwb2mQcuWd20i6BlIG+UNePiblUp5HHqsTIfAOvCO+1WXo5dJucapDFmdtHMAYI3ZUmVF0ZvGFarnJW0ZqJXiD+CzIOTaxaiPzDvbrPariVHfoTs4RrkApv+AADOUS7ydk/khNGnu45hboG4BhhinI6f9Rygf4rX/BGoWTNEsn1kBbTf2QDYXQBtsNXerENop3vIMHOQ+rzSHFkh8QEF7jEeRdAd3jEcRaC/Txa8uHYeeJkFk/VASRBqH3k/8Dc2BUXcEM3OHAAAAAElFTkSuQmCC"
    let full_star4 = document.createElement("img")
    full_star4.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAABDklEQVQokX2Qr0/DUBDHP1fahAkCqIGrIOC6JTUF3DKNGSFhYDBo/gUcfqropigUkgRHsGMJDk/mmIL94B2iZS30jTP37nv3ubt3YDFNg5amwb2mQcuWd20i6BlIG+UNePiblUp5HHqsTIfAOvCO+1WXo5dJucapDFmdtHMAYI3ZUmVF0ZvGFarnJW0ZqJXiD+CzIOTaxaiPzDvbrPariVHfoTs4RrkApv+AADOUS7ydk/khNGnu45hboG4BhhinI6f9Rygf4rX/BGoWTNEsn1kBbTf2QDYXQBtsNXerENop3vIMHOQ+rzSHFkh8QEF7jEeRdAd3jEcRaC/Txa8uHYeeJkFk/VASRBqH3k/8Dc2BUXcEM3OHAAAAAElFTkSuQmCC"
    let full_star5 = document.createElement("img")
    full_star5.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABmJLR0QA/wD/AP+gvaeTAAABDklEQVQokX2Qr0/DUBDHP1fahAkCqIGrIOC6JTUF3DKNGSFhYDBo/gUcfqropigUkgRHsGMJDk/mmIL94B2iZS30jTP37nv3ubt3YDFNg5amwb2mQcuWd20i6BlIG+UNePiblUp5HHqsTIfAOvCO+1WXo5dJucapDFmdtHMAYI3ZUmVF0ZvGFarnJW0ZqJXiD+CzIOTaxaiPzDvbrPariVHfoTs4RrkApv+AADOUS7ydk/khNGnu45hboG4BhhinI6f9Rygf4rX/BGoWTNEsn1kBbTf2QDYXQBtsNXerENop3vIMHOQ+rzSHFkh8QEF7jEeRdAd3jEcRaC/Txa8uHYeeJkFk/VASRBqH3k/8Dc2BUXcEM3OHAAAAAElFTkSuQmCC"
    let half_star = document.createElement("img")
    half_star.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAA00lEQVQ4jbWQPWoCYRRFz81MIEU6iQhWQQRBiKROqjRWKVMYwRVY2ttlAe5AgwlxFdlCYpMl2LmAmLkWDuIPwflGvN2De8733genjN8a94c6Z//Ck6cIeZRbwOLnEXOdX2B1D8EAMYAn9Uv+olsSXSGXEGXMQ2YBv1Ef0UNOX8+CrpKe4BfwZ3ZsR6D2dE6cNDGvoQJtDjbi/WYMtNaF52/tUbsbrMvC4IuQDbYENgLd5Rbw0agCxXSaIXXCBCQVYIEZEJ/X1PoK+1QbeVgrBEHHZgkRAjJ5EgLWMgAAAABJRU5ErkJggg=="

    // appending element in the items container

    item_container.append(food_img_container, item_discription)
    food_img_container.append(food_img)
    item_discription.append(restaurant_food_name_cont, rating_qty_price_box)
    restaurant_food_name_cont.append(restaurant_name_addbnt_cont, food_category_section, food_name)
    food_category_section.append(food_category_dot, food_category)
    restaurant_name_addbnt_cont.append(restaurant_name, add_to_cart_btn)
    add_to_cart_btn.append(add_to_cart_btn_img)
    rating_qty_price_box.append(rating_box, sepreting_line, Qty_box, sepreting_line2, price_box)


    // giving id to the elements
    item_container.setAttribute("id", "item_container")
    food_img_container.setAttribute("id", "item_img_container")
    food_img.setAttribute("id", "item_image")
    item_discription.setAttribute("id", "discription_box")
    restaurant_food_name_cont.setAttribute("id", "restrnt_food_name")
    restaurant_name_addbnt_cont.setAttribute("id", "head_addbtn")
    add_to_cart_btn.setAttribute("id", "add-to-cart")
    rating_qty_price_box.setAttribute("id", "rate_qty_rate")
    rating_box.setAttribute("id", "rating_box")
    sepreting_line.setAttribute("class", "partition_line")
    sepreting_line2.setAttribute("class", "partition_line")
    food_category_section.setAttribute("id", "food_category_section")

    // giving value in the elements
    food_img.src = main_items[i].food_image
    restaurant_name.textContent = main_items[i].restaurant_name
    add_to_cart_btn_img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAABmJLR0QA/wD/AP+gvaeTAAAAgklEQVQ4je2UsQ3CMBBFnxEzmIYMkDpZh+nYhgyQAdKxxKOxJVIYHSJNgNecZX09nXSng69Czeqk5kj+EPR2wFjqZtK3+Eu351gf6gk4N3J9rWrLtaSU7qufsoefMFVXepJm2nvYA1fgAszhTl+hDqWbIZLfz/R/XBqi3NNb9J7uhwc2cnFktBtsUQAAAABJRU5ErkJggg=="

    food_category.innerHTML = main_items[i].food_category
    food_name.textContent = main_items[i].food_name
    sepreting_line.innerHTML = "|"
    sepreting_line2.innerHTML = "|"
    Qty_box.textContent = 'for - ' + main_items[i].Qty
    price_box.innerHTML = "&#8377;" + " " + main_items[i].food_price
    main_container.append(item_container)

    // food category dot code 
    if(main_items[i].food_category == "veg"){
        food_category_dot.style.backgroundColor = "rgb(76, 175, 114)"
    }
   else if(main_items[i].food_category == "non-veg"){
        food_category_dot.style.backgroundColor = "rgb(211, 87, 87)"
    }
    else{
        food_category_dot.style.backgroundColor = "rgb(118, 180, 238)"
    }

    // rating star code

    if(main_items[i].rating == "1"){
        rating_box.append(full_star1)
    }
    else if(main_items[i].rating == "1.5"){
        rating_box.append(full_star1,half_star)
    }
    else if(main_items[i].rating == "2"){
        rating_box.append(full_star1,full_star2)
    }
    else if(main_items[i].rating == "2.5"){
        rating_box.append(full_star1,full_star2,half_star)
    }
    else if(main_items[i].rating == "3"){
        rating_box.append(full_star1,full_star2,full_star3)
    }
    else if(main_items[i].rating == "3.5"){
        rating_box.append(full_star1,full_star2,full_star3,half_star)
    }
    else if(main_items[i].rating == "4"){
        rating_box.append(full_star1,full_star2,full_star3,full_star4)
    }
    else if(main_items[i].rating == "4.5"){
        rating_box.append(full_star1,full_star2,full_star3,full_star4,half_star)
    }

    
    else{
        rating_box.append(full_star1,full_star2,full_star3,full_star4,full_star5)
    }

    

}

let banner = document.getElementById("banner")

window.addEventListener("scroll", function(){
    var category_nav = document.getElementById("food_category_nav");
   if(window.scrollY > 50){  
    category_nav.style.position = "fixed"
    category_nav.style.top = "0px"
    banner.style.marginTop = "100px"
   
  

   }


   else{
    category_nav.style.position = 'inherit'
    banner.style.margin = "1%"


   }
})




