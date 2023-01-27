const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
    res.render('index');
  });

  router.get('/sobre', function(req, res, next) {
    res.render('sobre');
  });



module.exports = router;