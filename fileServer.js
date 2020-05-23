const { createServer } = require('http');

const { createReadStream } = require('fs');

const { decode } = require('querystring')

const sendFile = (res, status, type, filePath) => {
    res.writeHead(status, {
        'Content-Type': type
    });
createReadStream(filePath).pipe(res);
};

createServer((req, res) => {

    if (req.method === 'POST') {
        let body = '';
        
        req.on('data', data => {
            body += data;
        })

        req.on('end', () => {
            const { name, email, message } = decode(bbody)
            console.log(` ${name} (${email}): ${message}`);
        })
    }

    switch (req.url) {
        case '/':
            return sendFile(res, 200, 'text/html', './Charlie_Brown.html');
        default:
            return sendFile(res, 200, 'text/html', './snoopy.html');
    }
}).listen(3000);

 console.log(' Charlie Brown\'s website runnning on port 3000');

