const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const donar = require('./Routes/donar');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/donar', donar);



module.exports = app;