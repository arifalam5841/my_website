const http = require("http")// including a 'http' mdule to make a server
const fs = require("fs")
let files = fs.readFileSync("again_JS/To_change_images_every_second.html", "utf-8")
const server = http.createServer((req, res) => {  //the "req" and "res" are params in first value you have to what require and in second you have give what this server give
    res.writeHead(200, { 'Content-type': "text/html" }) // set the type of the file the "200" is server code
    res.end("arif")// inseting element in res that what it will give
})

server.listen(80, '127.0.2.2', () => { // the '80' is port value and the "127.0.2.2" is url of this server
    console.log('server is making') // it log in console
})

fs.writeFileSync('again_node/server_file.txt', files)