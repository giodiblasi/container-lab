const express = require('express');
const app = express();
const getUser = require('./users');

const PORT = process.env.PORT || 3000;

app.get('/:userid/name', function (req, res) {
    const name = getUser(req.params.userid);
    if(!name) res.status(404).send('');
    else res.send(name);
});

app.listen(PORT, function () {
  console.log(`User service listening on port ${PORT}!`);
});
