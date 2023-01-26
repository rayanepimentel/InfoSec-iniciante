const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const path = require('path');
const router = express.Router();


app.use(bodyParser.json());


// app.get('/', function(req, res) {
//     res.render("./")
// })

router.get('/', function(req, res) {
    res.sendFile(path.join(`${__dirname}/public/menu.html`));
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);

module.exports = app;