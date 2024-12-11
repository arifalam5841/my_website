let menu_btn = document.getElementById("menu_icon")
let menu = document.getElementById("menu")
let menu_cut_bnt = document.getElementById("menu_cut_bnt")

menu_btn.addEventListener("click", function(){
    if(menu.style.right == "-230px"){
        menu.style.right = "-50px" 
    }

    else{
        menu.style.right = "-230px"
    }
})
menu_cut_bnt.addEventListener("click", function(){
    menu.style.right = "-230px"
})



// atutomatic scrolling

let container = document.getElementById("banner")

function scrolling(){
    container.scrollBy(5000,0)// first value is for X direction and the second is for Y direction
  
}
function scrollingback(){
    container.scrollBy(-800,0)// it scroll at opposite direction
   
}
setInterval(scrolling, 3000);
setInterval(scrollingback, 9000)


// courses code

let courses_btn = document.getElementById("courses_btn")
let courses_options = document.getElementById("courses_options")

courses_btn.addEventListener("click", function(){
    if(courses_options.style.display == 'none'){
        courses_options.style.display = 'flex'
    }

    else{
        courses_options.style.display = "none"
    }
})


// body scrolling

