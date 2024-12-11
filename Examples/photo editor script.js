// dispaling none funtion ------------

function dispaling_none(btn_id, options_id) {
    let btn = document.getElementById(btn_id)
    let options_box = document.getElementById(options_id)

    btn.addEventListener('click', function () {
        if (options_box.style.display == 'block') {
            options_box.style.display = 'none'
        }

        else {
            options_box.style.display = 'block'
        }
    })
}

dispaling_none('bg_color_opt_btn', 'bg_color_options')
dispaling_none('font_family_opt_btn', 'font_family_options')
dispaling_none('font_color_btn', 'font_color_options')

// changing backgound color funtion ------------

function change_bg_color(color_id, bg_color) {
    let image = document.getElementById('image')
    let color_box = document.getElementById(color_id)

    color_box.addEventListener('click', function () {
        image.style.background = bg_color
        document.getElementById('bg_color_options').style.display = 'none'
    })
}

change_bg_color("black_color", 'black')
change_bg_color("red_color", 'red')

// changing the color of the font in html 
function change_font_color(font_color_id, font_color) {
    let color_box = document.getElementById(font_color_id)

    color_box.addEventListener('click', function () {
        document.getElementById('head').style.color = font_color
        document.getElementById('font_color_options').style.display = 'none'
    })
}

change_font_color('red_font','red')
change_font_color('blue_font','blue')

//changing the font syle of the text----------- 

function change_font_style(font_style_id, font_style) {
    let color_box = document.getElementById(font_style_id)

    color_box.addEventListener('click', function () {
        document.getElementById('head').style.fontFamily = font_style
        document.getElementById('font_family_options').style.display = 'none'

    })
}

change_font_style('bold',`'Bold', sans-serif`)
change_font_style('cursive','cursive')

//  changing the bordore radius of the image --------

let b = 0;
let image = document.getElementById('image')

function bordore_set() {
    image.style.borderRadius = b + "px"
}


document.getElementById('border_increase').addEventListener('click', function () {
    b++
    document.getElementById('border_para').innerHTML = b

    bordore_set()
})
document.getElementById('border_decrease').addEventListener('click', function () {
    b--
    if (b <= 0) {
        b = 0
    }
    document.getElementById('border_para').innerHTML = b

    bordore_set()
})


//  changing the width radius of the image --------

let w = 100;

function width_set() {
    image.style.width = w + "px"
}


document.getElementById('width_increase').addEventListener('click', function () {
    w++
    document.getElementById('width_para').innerHTML = w



    width_set()
})
document.getElementById('width_decrease').addEventListener('click', function () {
    w--
    document.getElementById('width_para').innerHTML = w

    if (w <= 0) {
        w = 0
    }

    width_set()
})


//  changing the height of the image --------

let h = 100;

function height_set() {
    image.style.height = h + "px"
}


document.getElementById('height_increase').addEventListener('click', function () {
    h++
    document.getElementById('height_para').innerHTML = h



    height_set()
})
document.getElementById('height_decrease').addEventListener('click', function () {
    h--
    document.getElementById('height_para').innerHTML = h

    if (h <= 0) {
        h = 0
    }

    height_set()
})


//  changing the shadow  of the image --------

let s = 0;

function shadow_set() {
    image.style.boxShadow = `5px 5px ${s}px`
}


document.getElementById('shadow_increase').addEventListener('click', function () {
    s++

    document.getElementById('shadow_para').innerHTML = s

    shadow_set()
})
document.getElementById('shadow_decrease').addEventListener('click', function () {
    s--
    document.getElementById('shadow_para').innerHTML = s

    if (s <= 0) {
        s = 0
        image.style.boxShadow = `0px 0px 0px`

    }

    shadow_set()
})



//  changing the font size of the image --------

let fs = 31;

function font_s_set() {
document.getElementById('head').style.fontSize = fs+'px'
}


document.getElementById('font_s_increase').addEventListener('click', function () {
   fs++
    document.getElementById('font_s_para').innerHTML = fs


 
    font_s_set()
})
document.getElementById('font_s_decrease').addEventListener('click', function () {
    fs--
    document.getElementById('font_s_para').innerHTML = fs

    if (fs <= 0) {
        fs = 0
    }

font_s_set()
})

//  rotating the image --------

let ro = 0;

function rotate_set() {
document.getElementById('image').style.transform = `rotate(${ro}deg)`
}


document.getElementById('rotate_increase').addEventListener('click', function () {
   ro++
    document.getElementById('rotate_para').innerHTML = ro


 
    rotate_set()
})
document.getElementById('rotate_decrease').addEventListener('click', function () {
    ro--
    document.getElementById('rotate_para').innerHTML = ro

    // if (ro <= 0) {
    //     ro = 0
    // }

rotate_set()
})


//  changing the margin of the image --------

let m = 0;

function margin_set() {
    image.style.margin = m + "px"
}


document.getElementById('margin_increase').addEventListener('click', function () {
    m++
    document.getElementById('margin_para').innerHTML = m



    margin_set()
})
document.getElementById('margin_decrease').addEventListener('click', function () {
    m--
    document.getElementById('margin_para').innerHTML = m

    if (m <= 0) {
        m = 0
    }

    margin_set()
})

//  changing the padding of the image --------

let p = 0;

function padding_set() {
    image.style.margin = p + "px"
}


document.getElementById('padding_increase').addEventListener('click', function () {
    p++
    document.getElementById('padding_para').innerHTML = p



    padding_set()
})
document.getElementById('padding_decrease').addEventListener('click', function () {
    p--
    document.getElementById('padding_para').innerHTML = p

    if (p <= 0) {
        p = 0
    }

    padding_set()
})
