const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const sign = require('./Routes/sign');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/sign', sign);



module.exports = app;