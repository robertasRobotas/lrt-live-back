const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const lrtRoute = require('./api/routes/lrt');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use((req, res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/lrt', lrtRoute);

module.exports = app;