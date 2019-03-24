var express = require('express');
var app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, function () {
  console.log(`Polite Service listening on port ${PORT}`);
});

app.get('/:username/hello', function (req, res) {
    res.send(`Hello ${req.params.username}!`);
});

app.get('/stop', (req, res)=>{
    res.send();
    server.close();
});
