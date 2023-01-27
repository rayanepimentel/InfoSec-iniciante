const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require('path');
const indexRouter = require('./routes/rotas');

app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


module.exports = app;