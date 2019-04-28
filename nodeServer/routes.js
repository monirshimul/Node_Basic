

const fs = require('fs');

const requestHandler = (req, res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
        }
    
        if(url === '/message' && method === 'POST'){
            const data = [];
            req.on('data', (chunk)=>{
                console.log(chunk.toString());
                data.push(chunk);
            });
            return req.on('end', ()=>{
                const perseData = Buffer.concat(data).toString();
                console.log(perseData);
                var spilittedData = perseData.split('=');
                const mesg = spilittedData[1];
                fs.writeFile('message.txt', mesg, err=>{
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                });
            });        
        }
    
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body><h1>Hello Buddy....</h1></body>');
        res.write('</html>');
        res.end();
};

module.exports = requestHandler;

