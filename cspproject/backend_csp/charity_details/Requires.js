const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const charity = require('./Routes/charity');
const donar = require('./Routes/donar');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/charity', charity);
app.use('/donar', donar);



module.exports = app;