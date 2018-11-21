const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

const port = 3000
// const hostName = 'localhost'
server.listen(port);