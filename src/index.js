require("dotenv").config();
require("./db/mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes.apiRoute(app);

app.listen(PORT || 3000, ()=>{
    console.log(`The server is upon the ${PORT}`);
});