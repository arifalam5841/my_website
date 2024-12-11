// -----------"To include file from a folder we use this"--------------//

const fs = require("fs")

let file1 = fs.readFile("./again_JS/Google.html", "utf-8", (err, data) => {
    console.log(data)
})