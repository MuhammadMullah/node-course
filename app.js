const http = require('http');

const express = require('express');


const app = express();

app.use((req, res, next) => {
    res.send('<h1>Hello from Express</h1>');
});

const port = 3000
// const hostName = 'localhost'
app.listen(port);