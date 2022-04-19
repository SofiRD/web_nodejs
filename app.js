var express = require('express');
var path = require('path');
var index = require('./index');
var app = express();
const port = 3000;

app.use('/', index);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});