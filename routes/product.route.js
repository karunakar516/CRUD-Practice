const express=require("express")
const product=require("../models/product.model.js")
const router=express.Router()
const {getProducts , getProduct, createProducts, updateProduct, deleteProduct} = require('../controllers/product.controller.js')

router.get('/',getProducts)
router.post('/',createProducts)
router.get('/:id',getProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports=router