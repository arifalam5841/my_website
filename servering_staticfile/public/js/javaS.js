

let img = document.getElementById('image')
let btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    if (img.style.display == "block") {
        img.style.display = "none"
    }
    else {
        img.style.display = "block"
    }

})