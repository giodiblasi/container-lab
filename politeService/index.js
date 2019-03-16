var express = require('express');
var app = express();

//const port = procesr.argv[2]

app.get('/:username/hello', function (req, res) {
  res.send(`Hi ${req.params.username}`);
});

app.listen(3000, function () {
  console.log(`Example app listening on port 3000!`);
});
