// console.log("arif is a good boy")  if you want to run this code in node then just click on run button on the top right 
// let a = 45
// console.log(a +45)

//click on the terminal "ctrl"+"c" to quite the sever

//in node "_" is use to call the previous variable
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');//always give 'text/html' to run the html desing
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title> Creating Layouts Using Grid Template Area</title>
      <style>
          .container{
              display: grid;
              grid-gap: 1rem;
              grid-template-areas: 
              /* important */
         'navbar navbar navbar '                  /*  navbar will cover full width  */
               'section section  aside' ;         /* section will cover 3rd part and aside will cover 1 part */ 
  
          }
          .item{
              background-color: yellowgreen;
              border: 2px solid black;
              padding: 15px;
          }
  
          #navbar{
              grid-area: navbar;
              
          }
  
          #section{
              grid-area: section;
          }
  
          #aside{
              grid-area: aside;
  
  
          }
      </style>
  </head>
  <body>
      <div class="container">
            <div id="navbar" class="item">  home about contact setting</div>
           <div id="section" class="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum similique, accusamus non animi recusandae laudantium consequuntur esse reprehenderit, eos placeat pariatur aliquam! Cupiditate, ex odio.</div>
           <div id="aside" class="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat totam adipisci libero vero iste quibusdam!</div>
      </div>
      
  </body>
  </html>`);
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});