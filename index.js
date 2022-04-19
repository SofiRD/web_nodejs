var express = require('express');
var router = express.Router();
var db=require('./connect-db/db');

router.get('/', function(req, res, next) {
    // Consulta SQL.
    var sql = 'SELECT * FROM category';
    db.query(sql, function (err, data, fields){
    if (err) throw err;
    res.render('index', { title: 'DB data', userData: data});
  });
});
module.exports = router;