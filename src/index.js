const express = require('express');

const productController = require("./controllers/product.controller")

const app = express();

app.use(express.json());

app.get('/',async function(req,res){
    res.send("connected happy coading...")
})
app.use("/form", productController)

module.exports = app;