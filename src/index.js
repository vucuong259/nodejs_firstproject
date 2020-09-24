const path = require('path');
const express = require('express');
const morgan = require('morgan');
const route = require('./routes');
const db = require('./config/db');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
//connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});