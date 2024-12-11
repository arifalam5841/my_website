
// ---------------------"here we are making a server using express"--------------------------------//

const express = require("express") // first you have to include the express
const app = express() //we have store the variable where we include the express in a second var to make the sever
const port = 80; // we have store the port num in a var

app.get("/", (req,res)=>{
    res.send("hello HELLO")
})

//now we have to write in post is = "local/filename
app.get("/another_file", (req,res)=>{ //it will if the url is == to "/another_file"
    res.send("hello it's another file of the express server")
})

//now we making the file by post request
app.post("/another_file", (req,res)=>{ //like this you can make multiple pages
    res.send("hello it's Post file of the express server")
})
// you can set status also
app.post("/status_file", (req,res)=>{ //like this you can make multiple pages
    res.status(200).send("hello it's Post file of the express server")
})

app.listen(port, () => { // then we have listen the server we have give the port num and cal back
    console.log(`this is the first expresss app ${port}`)
})