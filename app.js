const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes);

const port = 3000
// const hostName = 'localhost'
server.listen(port);