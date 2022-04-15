const port=3000;
const express = require("express");
const mongoose = require('mongoose');
const control = require('./controllers/Controller');
const ejs = require("express-handlebars");
const app = express();

mongoose.connect("mongodb+srv://rjoshy1:Roshan@srt621roshan.r020c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true })
    .then(() => console.log('DB Connected'));
mongoose.connection.on('error', (err) => console.log(`There is connection error for DB: ${err.message}`));

app.engine('.ejs', ejs.engine({
    defaultLayout: 'layout',
    extname: '.ejs',
}));
app.set('view engine', '.ejs');

app.use(express.static("./public"));
app.get("/home", control.Home);
app.get("/books/:bookNumber", control.BPage);

app.listen(3000);
console.log(`The port where the server listens ${port}`);