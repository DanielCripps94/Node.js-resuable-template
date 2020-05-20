// Resuable server set up

const http = require('http');

const server = http.createServer((req, res) => {
    res.end (`yo Dan - you're on the server`)
}); 


server.listen(3000, '127.0.0.1', () => {
    console.log('listening to request on port 3000')
}); // explicitly we can define the ip address for local host but will do it default also


