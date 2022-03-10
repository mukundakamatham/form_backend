const express = require('express');

const router = express.Router();

const crudController = require("./crud.controller");
const Product = require("../models/product.model")




router.get("/",  async function(req, res) {
    const page = +req.query.page||1;
    const size = +req.query.size||10;
    const offset=(page-1)*size;
    
    
    const total=await Product.find().countDocuments().lean().exec();
    const pageCount=Math.ceil(total/size);
    const products = await Product.find().skip(offset).limit(size).lean().exec();
    
    return res.send(products)
})
router.post("/", crudController.post(Product));
router.get("/:id", crudController.getOne(Product))
router.patch("/:id", crudController.updateOne(Product))
router.delete("/:id", crudController.deleteOne(Product))
module.exports = router;