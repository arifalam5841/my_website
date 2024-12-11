const http = require('http'); // moudules are call
const fs = require('fs');

const hostname = '127.0.0.1'; // this is hostname value that is store in a var that can be call anwhere
const port = 3000; // this port value store in a var that can be call in anywhere
const home = fs.readFileSync('again_node/index.html') // these are the file that will serve by the server
const about = fs.readFileSync('again_node/about.html')
const services = fs.readFileSync('again_node/services.html')
const contact = fs.readFileSync('again_node/contact.html')

const server = http.createServer((req, res)=>{ 
    console.log(req.url);// printing that url that is requested by user  
    url = req.url; // the url that will requested by user is store in a var that can also call in anywhere

    res.statusCode = 200; // giving the status code here
    res.setHeader('Content-Type', 'text/html'); // giving the type of text
    if(url == '/'){ // if the url that is requested by user is == this then it will sever below file
        res.end(home); //server the file
    }
    else if(url == '/about'){ // these all are same conditions like above 
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{ //else statement
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }


    
});

server.listen(port, hostname, () => { // listening the server
    console.log(`Server running at http://${hostname}:${port}/`); // call the "hostname" and "port"
  });