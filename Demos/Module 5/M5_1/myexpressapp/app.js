const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello Express.js');
})
const PORT = process.env.PORT || 3000;
/*
app.listen(PORT, () => {
    console.log('Server running on port');
})
*/

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
})