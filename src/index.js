
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//connect to DB
db.connect();

//Template engine
// app.engine('.hbs', handlebars.engine); // Truyền handlebars.engine làm callback function
// app.set('view engine', '.hbs');
// app.set('views', path.join(__dirname, 'resources\\views'));
const hbs = handlebars.create({ extname: '.hbs' }); // Tạo đối tượng handlebars
app.engine('.hbs', hbs.engine); // Sử dụng hàm engine() của đối tượng handlebars
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources\\views'));


app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

console.log('PATH: ', path.join(__dirname, 'resources\\views'));

route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
