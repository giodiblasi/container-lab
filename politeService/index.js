var express = require('express');
var app = express();

const server = app.listen(3000, function () {
  console.log(`Example app listening on port 3000!`);
});

app.get('/:username/hello', function (req, res) {
  res.send(`Hi ${req.params.username}`);
});

app.get('/stop', (req, res)=>{
    res.send();
    server.close();
});
