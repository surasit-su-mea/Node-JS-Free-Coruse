const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname,"/public/")));

app.get("/",(req,res) =>{

    res.send('Hello borntoDev FUNG Version 3');

})

app.listen(PORT, () => {
    debug("Listening on port " + chalk.green(PORT));

})