const express = require('express');

var app = express();

app.use('/', function (req, res) {
  res.send('Start Server');
});

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');
