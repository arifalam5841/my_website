const express = require('express');
const path = require('path');
const app = express();
const PORT = 300;

let home = path.join(__dirname, 'public')

app.use(express.static(home));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));