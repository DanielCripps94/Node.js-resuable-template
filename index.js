// Resuable server set up

const http = require('http');
const url = require('url')

const server = http.createServer((req, res) => {
    const pathName = (req.url)
   
    if(pathName === '/' || pathName === '/overview') {
        res.end("Your team overview");
    } else if (pathName === '/team') {
        res.end("Specific team overview")
    } else if (pathName === './api') {
        res.end('API');
    }
     else {
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-own-header': 'STOP-GAMER'
        });
        res.end(<h2>PAGE NOT FOUND</h2>)
    }
}); 


server.listen(3000, '127.0.0.1', () => {
    console.log('listening to request on port 3000')
}); // explicitly we can define the ip address for local host but will do it default also

    
