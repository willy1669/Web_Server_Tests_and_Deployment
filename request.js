const https = require('https');
const fs = require('fs');

// const options = {
//     hostname: "en.wikipedia.org",
//     port: 443,
//     path: '/wiki/Snoppy',
//     method: 'GET'
// }

const request = https.get('https://en.wikipedia.org/wiki/Charlie_Brown;', res => {
    

    let download = fs.createWriteStream('./Charlie_BBrown.html')
    // res.on('data', data => {

    //     console.log('---chunk---', data.length);

    //     responseBody += data;
    // })

    res.pipe(download);

    // res.on('end', () => {
    //     fs.writeFile('./snoopy.html', responseBody, err => {

    //         if (err) {
    //             throw err
    //         } 
    //         console.log('file downloaded!')
    //     })
    // })
    res.on('end', () => {
        console.log('Response Finished: wiki page downloaded ')
    })
});

request.end()