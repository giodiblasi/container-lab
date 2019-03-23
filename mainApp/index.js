const express = require('express');
const app = express();
const axios = require('axios');

const getName = 'http://users:3000';
const sayHello = 'http://polite:3000';

app.get('/:userid/sayhello', function (req, res) {
    axios.get(`${getName}/${req.params.userid}/name`)
        .then(response=> axios.get(`${sayHello}/${response.data}/hello`))
        .then(response=> res.send(response.data))
        .catch(err=> res.send("Houston we have a problem"));
});

app.listen(3000, function () {
  console.log(`Example app listening on port 3000!`);
});
