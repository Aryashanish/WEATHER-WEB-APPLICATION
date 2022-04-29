const http = require("http");
const fs = require("fs");
const express = require('express');
const path = require('path');
const app = express();
// const url = require("url");

const port = 8000;

//For Sarving Static Files
// app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded());

//Set the tamplate engine as pug
app.set('view engine', 'html');
//Set the view directory
app.set('view', path.join(__dirname + '/view'));

app.get('/', (req, res) => {
    res.status(200).render('index.html');
})

app.listen(port, "127.0.0.1", () => {
    console.log("Application Listening to the port 8000");
})