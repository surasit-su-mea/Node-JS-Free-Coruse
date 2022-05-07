const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');
const res = require('express/lib/response');


const app = express();
const PORT = process.env.PORT || 4000;
const productsRouter = require("./src/router/productsRouter");

app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/products", productsRouter);

app.get("/", (req, res) => {

    res.render('index', { username: 'FUNG FUNG', customers: ["AAAAA", "BBBBB", "CCCCC"] });

})

app.listen(PORT, () => {
    debug("Listening on port " + chalk.green(PORT));

})