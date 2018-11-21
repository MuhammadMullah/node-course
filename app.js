const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text-html');
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