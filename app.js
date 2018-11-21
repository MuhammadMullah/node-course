const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="message" method="POST"><input type="text" name="message"><button>Send</button></input></form></body>');
        res.write('</html>');
        return res.end();
    }
    // write data to the response
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my node.js Server</h1></body>');
    res.write('</html>');
    res.end();
});

const port = 3000
// const hostName = 'localhost'
server.listen(port);