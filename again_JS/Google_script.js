let tabs_bar = document.getElementById("tabs")
let tabs_list = [
    "",
    { icon: "https://img.icons8.com/color/48/000000/google-logo.png", tile: "Google", site_address: "google" },
    { icon: "https://codewithharry.com/img/logo-blue.png", tile: "CodeWithHarry", site_address: "codewithharry" },
    { icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2IwYjBiMCI+PHBhdGggZD0iTTg2LDYuODhjLTQzLjYyOTUyLDAgLTc5LjEyLDM1LjQ5MDQ4IC03OS4xMiw3OS4xMmMwLDQzLjYyOTUyIDM1LjQ5MDQ4LDc5LjEyIDc5LjEyLDc5LjEyYzQzLjYyOTUyLDAgNzkuMTIsLTM1LjQ5MDQ4IDc5LjEyLC03OS4xMmMwLC00My42Mjk1MiAtMzUuNDkwNDgsLTc5LjEyIC03OS4xMiwtNzkuMTJ6TTI3LjY2NzgxLDQzLjU2NDM3bDI0LjA5MzQ0LDM5LjI1NzY2YzEuNjA5OTIsLTE3LjQ4MjA4IDE2LjM0Mzg3LC0zMS4yMjIwMyAzNC4yMzg3NSwtMzEuMjIyMDNoNjMuNTEyMzVjMS4yMDc0NCwyLjIyMjI0IDIuMjc4MzUsNC41MjcwNCAzLjI1MTg3LDYuODhoLTQ2LjIxMTU2YzguMzg2NzIsNi4yNzggMTMuODQ3MzUsMTYuMjYwODggMTMuODQ3MzUsMjcuNTJjMCw2LjE0NzI4IC0xLjY0MzQsMTEuOTEyNzggLTQuNDgxNCwxNi45MTExYy0wLjAyNDA4LDAuMDQ4MTYgLTAuMDE5NTEsMC4wOTk2NSAtMC4wNDcwMywwLjE0NzgxbC0zMS40NjM5MSw1NS4xMDA0N2MtMi41Njk2OCwtMC4wNTg0OCAtNS4xMDE0NiwtMC4yNTQ2MSAtNy41OTg5LC0wLjU3MTA5bDIyLjg3MDYyLC00MC4wMzcwM2MtNC4xOTY4LDEuODI2NjQgLTguODE4NjUsMi44NDg3NSAtMTMuNjc5MzcsMi44NDg3NWMtMTIuMjQyOTYsMCAtMjIuOTgzMDcsLTYuNDUyMDQgLTI5LjA3ODc1LC0xNi4xMTE1NmMtMC4wNzkxMiwtMC4wOTk3NiAtMC4xNzMwOCwtMC4xNzg4MiAtMC4yNDE4OCwtMC4yODg5bC0zMy4xNzcxOSwtNTQuMDY1NzhjMS4yNzYyNCwtMi4yMDUwNCAyLjY2OTIzLC00LjMyMjU4IDQuMTY1NjMsLTYuMzY5Mzh6TTg2LDU4LjQ4Yy0xNS4xOTg4OCwwIC0yNy41MiwxMi4zMjExMiAtMjcuNTIsMjcuNTJjMCwxNS4xOTg4OCAxMi4zMjExMiwyNy41MiAyNy41MiwyNy41MmMxNS4xOTg4OCwwIDI3LjUyLC0xMi4zMjExMiAyNy41MiwtMjcuNTJjMCwtMTUuMTk4ODggLTEyLjMyMTEyLC0yNy41MiAtMjcuNTIsLTI3LjUyeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+", tile: "New tab", site_address: "#" },
]

let add_btn = document.getElementById("add_tabs_btn")
let a = 0


console.log(tabs_list.length)


add_btn.addEventListener("click", function () {

    a++

    if (a < tabs_list.length) {
        add_btn.disabled = false
    }

    else {
        add_btn.disabled = true
    }
    // creating the elements
    let a_tag = document.createElement("a")
    let div = document.createElement("div")
    let icon_img = document.createElement("img")
    let tab_title = document.createElement("p")
    let cut_icon_container = document.createElement("p")
    let cut_tab_icon = document.createElement("img")


    // adding the elements in tabs_bar

    tabs_bar.appendChild(a_tag)
    a_tag.append(div)
    div.appendChild(icon_img)
    div.appendChild(tab_title)
    a_tag.appendChild(cut_icon_container)
    cut_icon_container.appendChild(cut_tab_icon)

    // adding values in the elents
    a_tag.href = `http://${tabs_list[a].site_address}.com/` // you have give the herf value 
    icon_img.src = tabs_list[a].icon
    tab_title.innerHTML = tabs_list[a].tile

 
    cut_tab_icon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAzklEQVRIie3S0QqCMBTGce0Bs0Txwp69wMgKewOFfzcTlLaxc9Qg2ne7nfPj7CxJYmL+JkAJvIAbcBDUHYE70AGFFE1N4ZgeqALqKnN3TCeCTZMn83hxCwrw0MC5pZEVd6A9kIth07CwNByA0+RO6bhTq9AQfDN0grueMmgVS3Hb5NtMKsDF6E5op8ozfRwf6ePDrY1+/3M5Jh2A2rHz5ZP70MmddXEgC31KzyoyDXyV7M+BNxq4DUU9eKuBM6ABzpInM3UXU7sXwzExP5s3um/syN1W7JQAAAAASUVORK5CYII="
    cut_tab_icon.addEventListener("click", function () {
        a_tag.style.display = "none"
        a = a - 1
    })


})


function main_search_bar() {
    document.getElementById("search_bar").style.background = "rgb(46, 45, 45)"
    document.getElementById("share_rank_container").style.display = "none"
}


// http://${tabs_list[a].site_address}.com/

let apps_section = document.getElementById("apps")

let apps_list = [
    { app_icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACPUlEQVRIia2WPWzTQBiGn3NSD3bSTgwVEQoFIYQq9jIiIWiBNCMTKmWgC2FuFgQLXWHrULWwIDFRaAEhMTMj8bOVSlRlbvMztAkvg+30bIckEN7Jfr+757vzne87Qw9JOgHMAleBIlAIQzvANrABrBtjfvTidAMfl7QsqaX+akt6Iak4KLwsqTYAOKl9SaV+8HvhiP5VbUmVXiMfBm4n6czEhPAC8A3IAbzbfs/q56c0W00AvKzH/OQcl4uXgl4/V2BrEdr7wXtmFCaWYHw+4taAs8aYXSc0HkZwIAYHaLaarH5ZO5quDYfg+fui/UHywAMAR8FWvGlHbXikxqHl2fBIrb2kc0tSwQHKQCbdY2hlgFkHmE5GvKyXau2PWF5mNI3LjnVLMuMAp5Pu/ORcDOiPBIvc0cRSHJgdC7y0ThlJNawF/s+qO/3bDKVfWWAXOGO7z78e8ujjAfUDAZBzDdUplxvnRgBobb7kYPkJajYAMJ6Pu1AhO1NOJtg1kt4CV2z3/EqjA4+Udw2fbvsANEsXO/BIxs/hrX9IJnjjAJtJNwkHqFleEg6gRj3lARsOsA60u0WHVAt47YTFYs2O5FyTap23POP5qbjxUxtxxRizE+2i+wQHFADVKTcGzLuG6gW38+4uVGJA4+dw78RO6X3Cs6gjSdMarIINclxfT00xTFLR8AXnble4laSkoPz9rfYkXesJt5Ick/RY0uGAo34mabwbK71d4okKHF1bThK/tmwR/EOvjDE7f2L8BpEyokl6IIV7AAAAAElFTkSuQmCC", app_name: "Apps" },
    { app_icon: "https://img.icons8.com/color/48/000000/gmail-new.png", app_name: "Gmail" , site_address : "https://mail.google.com/mail/u/0/"},
    { app_icon: "https://img.icons8.com/color/48/000000/youtube-play.png", app_name: "YouTube" , site_address : "https://www.youtube.com/"},
    { app_icon: "https://img.icons8.com/color/48/000000/google-maps-new.png", app_name: "Maps", site_address : "https://www.google.com/maps" },
    { app_icon: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png", app_name: "News", site_address : "https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en" },
    { app_icon: "https://img.icons8.com/color/48/000000/yahoo-mail-app.png", app_name: "yahoo mail" , site_address : "https://in.mail.yahoo.com/d/folders/1?.intl=in&.lang=en-IN&pspid=2114723002&activity=header-mail"},
    { app_icon: "https://img.icons8.com/color/48/000000/microsoft.png", app_name: "Windows Keyword", site_address : "https://support.microsoft.com/en-us/windows/windows-keyboard-shortcuts-3d444b08-3a00-abd6-67da-ecfc07e86b98" },
    { app_icon: "https://img.icons8.com/color/48/000000/whatsapp--v1.png", app_name: "Whatsapp", site_address : "https://web.whatsapp.com/" },

]


for (i = 0; i < apps_list.length; i++) {
    let apps = document.createElement("a")
    let app_img = document.createElement("img")
    let apps_name = document.createElement("p")


    apps_section.appendChild(apps)
    apps.appendChild(app_img)
    apps.appendChild(apps_name)
    apps.href = apps_list[i].site_address
    app_img.src = apps_list[i].app_icon
    apps_name.innerHTML = apps_list[i].app_name


if(apps_list[i].app_name.length > 6){
    apps_name.innerHTML = apps_list[i].app_name[0]+apps_list[i].app_name[1]+apps_list[i].app_name[2]+apps_list[i].app_name[3]+apps_list[i].app_name[4]+apps_list[i].app_name[5]+" ..."
}

}

let apps_box = document.getElementById("apps_list")

let apps_list_container = [
    {apps_img : "https://lh3.googleusercontent.com/a-/AOh14Gixa2_FMgmFtmG1gOst85PP28hs3lDQFbj0Odqsew=s96-c-rg-br100", apps_name : "Account" , site_address : "https://myaccount.google.com/?hl=en&utm_source=OGB&utm_medium=act"},
    {apps_img : "https://img.icons8.com/color/48/000000/google-logo.png", apps_name : "search" , site_address : "http://google.com/"},
    {apps_img : "https://img.icons8.com/color/48/000000/google-maps-new.png", apps_name : "Map" , site_address : "https://www.google.com/maps"},
    {apps_img : "https://img.icons8.com/color/48/000000/youtube-play.png", apps_name : "Youtube" , site_address : "http://youtube.com/"},
    {apps_img : "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-square-play-button-for-android-application-store-logo-color-tal-revivo.png", apps_name : "Play" , site_address : "https://play.google.com/store?hl=en&tab=r8"},
    {apps_img : "https://upload.wikimedia.org/wikipedia/commons/0/0b/Google_News_icon.png", apps_name : "News", site_address : "https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en"},
    {apps_img : "https://img.icons8.com/color/48/000000/gmail-new.png", apps_name : "Gmail", site_address : "https://mail.google.com/mail/u/0/"} ,
    {apps_img : "https://img.icons8.com/color/48/000000/google-meet.png", apps_name : "Meet", site_address : "https://meet.google.com/?hs=197&pli=1&authuser=0"},
    {apps_img : "https://play-lh.googleusercontent.com/cF_oWC9Io_I9smEBhjhUHkOO6vX5wMbZJgFpGny4MkMMtz25iIJEh2wASdbbEN7jseAx", apps_name : "Chat", site_address : "https://mail.google.com/chat/u/0/"},
    {apps_img : "https://img.icons8.com/color/48/000000/google-contacts.png", apps_name : "Contact", site_address : "https://contacts.google.com/?hl=en&tab=rC"},
    {apps_img : "https://img.icons8.com/color/48/000000/google-drive--v1.png", apps_name : "Drive", site_address : "https://drive.google.com/drive/my-drive"},
    {apps_img : "https://i.pinimg.com/originals/6e/09/90/6e099088b3deb805b68d83676af6f067.png", apps_name : "Calender", site_address : "https://calendar.google.com/calendar/u/0/r?tab=rc&pli=1"},
    {apps_img : "https://img.icons8.com/color/48/000000/google-translate.png", apps_name : "Translate", site_address : "https://translate.google.co.in/?hl=en&tab=rT"},
    {apps_img : "https://img.icons8.com/color/48/000000/google-photos.png", apps_name : "Photo", site_address : "https://photos.google.com/?tab=rq&pageId=none&pli=1"},
    {apps_img : "https://img.icons8.com/color/48/000000/google-duo.png", apps_name : "Duo", site_address : "https://duo.google.com/?usp=duo_ald"},
    {apps_img : "https://img.icons8.com/color/48/000000/google-shopping.png", apps_name : "shopping", site_address : "https://shopping.google.co.in/?nord=1"},
]


for(i=0; i<apps_list_container.length; i++){
let apps_container = document.createElement("a")
let app_image = document.createElement("img")
let app_name = document.createElement("p")


apps_box.appendChild(apps_container)
apps_container.appendChild(app_image)
apps_container.appendChild(app_name)

app_image.src = apps_list_container[i].apps_img
app_name.innerHTML = apps_list_container[i].apps_name
apps_container.href = apps_list_container[i].site_address

}

let main_apps_box = document.getElementById("main_app_list")
document.getElementById("app_list_btn").addEventListener("click", function(){
    if(main_apps_box.style.display == 'block'){
        main_apps_box.style.display = 'none'
        main_apps_box.style.opacity = "0"
    }

    else{
        main_apps_box.style.display = 'block'
        main_apps_box.style.opacity = "5"

    }
})

document.getElementById("search-icon").addEventListener("click", function(){
    document.getElementById("middle_search_bar").focus()
})

document.getElementById("reload").addEventListener("click" ,function(){
    document.location.reload(true)
     reload.src = `https://img.icons8.com/material-outlined/24/000000/multiply--v1.png`
    // reload.src = "img/drone.png"
     
})


let shortcut_app_container = document.getElementById("shortcut_apps_container")

let shortcuts_apps_list = [
    {app_image : "https://img.icons8.com/color/48/000000/youtube-play.png", app_name : "Youtube", site_address : "http://youtube.com/"},
    {app_image : "https://img.icons8.com/color/48/000000/google-maps-new.png", app_name : "Map", site_address : "https://www.google.com/maps"},
    {app_image : "https://img.icons8.com/color/48/000000/whatsapp--v1.png", app_name : "Whatsapp", site_address : "https://web.whatsapp.com/"},
    {app_image : "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-yahoo-web-services-logotype-with-y-alphabet-logo-shadow-tal-revivo.png", app_name : "Yahoo", site_address : "https://in.mail.yahoo.com/d/folders/1?.intl=in&.lang=en-IN&pspid=2114723002&activity=header-mail"},
    {app_image : "", app_name : "Radiff  mail", site_address : ""},
    {app_image : "", app_name : "Codewithhary", site_address : ""},
    {app_image : "", app_name : "go daddy", site_address : ""},
    {app_image : "", app_name : "d", site_address : ""},
]


for(i=0; i<shortcuts_apps_list.length; i++){
    let a_tag = document.createElement("a")
    let div = document.createElement("div")
    let app_image = document.createElement("img")
    let menu_btn = document.createElement("button")
    let menu_icon = document.createElement("img")
    let app_name = document.createElement("p")
    let span_contianer =  document.createElement("span")
    let span_para = document.createElement("p")
    let small_menus = document.createElement("div")
    let edit_p = document.createElement("p")
    let remove_p = document.createElement("p")
    small_menus.setAttribute("id", "small_menu")
   a_tag.appendChild(small_menus)
   small_menus.appendChild(edit_p)
   small_menus.appendChild(remove_p)

   edit_p.innerHTML = "Edit"
   remove_p.innerHTML = "Remove"

   menu_btn.addEventListener("click", function(){
       if(small_menus.style.display == "none"){
        small_menus.style.display = "flex"
       }
       else{
        small_menus.style.display = "none"
       }
   })
// app_image.style.display = "none"


    shortcut_app_container.appendChild(a_tag)
    a_tag.appendChild(div)
    div.appendChild(app_image)
    div.appendChild(span_contianer)
    span_contianer.appendChild(span_para)
    div.append(menu_btn)
    menu_btn.appendChild(menu_icon)
    a_tag.appendChild(app_name)
    
    span_para.innerHTML = shortcuts_apps_list[i].app_name[0]
    app_image.src = shortcuts_apps_list[i].app_image
    app_image.setAttribute("id", "short_cut_img") // this how you can set id in a element by js you set other properties also
    app_name.innerHTML = shortcuts_apps_list[i].app_name
    menu_icon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAAK0lEQVQ4jWNgGN7g////R////38YnxomAmb8Y2Bg+E89J9EdjIbBaBgQCwAE+hyE571DdwAAAABJRU5ErkJggg=="

    if( shortcuts_apps_list[i].app_image == ""){
 app_image.style.display = "none"

 span_contianer.style.display = "flex"
    }


    // fuction of dispalying block menu icon 
     function meanu_icon_opacity(){
         menu_btn.style.opacity = "10"
     }

     let meanu_icon_opacity_settime ;
    a_tag.addEventListener("mouseover", function(){
        meanu_icon_opacity_settime = setInterval(meanu_icon_opacity,300)
    })

    a_tag.addEventListener("mouseout", function(){
        menu_btn.style.opacity = "0"
           clearInterval(meanu_icon_opacity_settime)
    })

    let span = document.createElement("span")
    let span_p = document.createElement("p")



 
    

}


document.getElementById("main_menu_btn").addEventListener("click", function(){
    if(document.getElementById("main_menu_container").style.display == "flex"){
        document.getElementById("main_menu_container").style.display = "none"
    }

    else{
        document.getElementById("main_menu_container").style.display = "flex"
    }
    
})