let btn = document.getElementsByClassName("btn")[0]
let container = document.getElementsByClassName("container")[0]

btn.addEventListener("click", ()=> {
    if(container.style.top == '-27%'){
        container.style.top = '15%'
    }
    else{
        container.style.top = '-27%'

    }
})