const express = require("express");
const app = express();
const routes = require ("./routes");


app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });

app.listen(process.env.PORT||3000, () => {
    console.log("My beer enciclopedia app is set up and running");
});