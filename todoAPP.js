var express = require('express');

var todoController = require('./controllers/todoControllers');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static file
app.use(express.static('./public'))

//fire todoControllers
todoController(app);

//listen to the port
app.listen(process.env.PORT || 3000);
console.log('listening');

