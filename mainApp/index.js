const express = require('express');
const app = express();
const axios = require('axios');

const PORT = process.env.PORT || 3000;
const USERS_SERVICE_URL = process.env.USERS_SERVICE_URL;
const POLITE_SERVICE_URL = process.env.POLITE_SERVICE_URL;

app.get('/:userid/sayhello', function (req, res) {
    axios.get(`${USERS_SERVICE_URL}${req.params.userid}/name`)
        .then(response=> axios.get(`${POLITE_SERVICE_URL}${response.data}/hello`))
        .then(response=> res.send(response.data))
        .catch(err => res.send("Houston we have a problem"));
});

app.listen(PORT, function () {
  console.log(`Main App listening on port ${PORT}!`);
});
