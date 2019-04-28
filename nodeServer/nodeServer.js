//const http = require('http');
//const routes = require('./routes.js');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const app = express();


app.use(bodyParser.urlencoded({extended : false}));
app.use('/admin', adminData.routes);
app.use(shopRouter);
app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, './', 'views', 'notFound.html'));
});
app.listen(1020, console.log('server is listening on port 1020')
    
);






// const server = http.createServer(app);

// server.listen(1020, ()=>{
//     console.log('server is listening on port 1020');
// });



