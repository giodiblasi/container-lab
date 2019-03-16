const express = require('express');
const app = express();
const getUser = require('./users');


app.get('/:userid/name', function (req, res) {
    const name = getUser(req.params.userid);
    if(!name) res.status(404).send('');
    else res.send(name);
});

app.listen(3000, function () {
  console.log(`Example app listening on port 3000!`);
});
