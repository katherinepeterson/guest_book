const http = require('http');
const fs = require('fs');
const path = require('path');
const fileName = path.join(__dirname, 'guests.txt');
const guestList = [];

fs.readFile(fileName, (err, data) => {
    while (guestList < 2) {
        guestList.push(data);
    }
})

const server = http.createServer((req, res)=>{
    if (req.method === 'GET') {
        res.write(
            `<html><body><h1>${guestList}</h1></body></html>`
            );
            res.end();
        }
    });
    
server.listen(3000);