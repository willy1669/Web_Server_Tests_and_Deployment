const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    
    res.end(`
    <!DOCTYPE html>
    <html>
        <head>
            <title> Hello World!</title>
        </head>
        <body>
            <h1> Hello World </h1>
            <p> ${req.method} </p>
            <p> ${req.url} </p>
        </body>
    
    </html>

    `);

}).listen(3000);

console.log('Web Server listening on port 3000');