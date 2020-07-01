const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', function (req, res) {
  res.send('Hola desde get');
});

router.post('/message', function (req, res) {
  res.send('Hola desde post');
});

// app.use('/', function (req, res) {
//   res.send('Start Server');
// });

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');
