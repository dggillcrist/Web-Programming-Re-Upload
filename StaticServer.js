const express = require('express'); //imports express
const morgan = require('morgan'); //imports morgan
const connect = require('./mongodbconnect');
connect.connect();
const dao = require('./model/indexMongoDAO');
const controller = require('./controller/controller');

const fs = require('fs'); // import file system
const app = express(); //creates a new Express Application
app.use(morgan('dev')); //For better logging, we use morgan
app.use(express.urlencoded({extended: true}));
app.use(express.json());



let hostname = 'localhost'; //address for this server
let port = 4000; //change the port if already in use
// Server will use the folder 'public_html'
app.use(express.static('public_html'));


app.get('/plan', controller.getAll);
app.get('/plan/:id', controller.get);
app.post('/plan', controller.postCreateOrUpdate);
app.post('/plan', controller.postCreateOrUpdate);
app.put('/updatePlan', controller.postCreateOrUpdate);
app.get('/delPlan/:_id', controller.deleteOne);




// Listen to client requests in hostname:port
const server=app.listen(port,hostname,function()
{
   console.log(`Server running in ${hostname}:${port}`);
});


