const express = require('express');
require("./models");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const fs = require("fs");
const https = require("https");

const app = express();

const port = 4000

app.listen(3000, function () {
  console.log('listening on 3000')
});

app.get('/', function (req, res) {
  res.send('')
})