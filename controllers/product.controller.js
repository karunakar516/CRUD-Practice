const product=require("../models/product.model.js")
const getProducts = async (req,res)=>{
    try{
        const obj=await product.find({});
        res.status(200).json(obj)
    }
    catch(error){
         res.status(500).json({message:error.message});
    }
};

const createProducts = async (req,res) =>{
    try{
        const obj=await product.create(req.body);
        res.status(200).json(obj)
    }
     catch(error){
         res.status(500).json({message:error.message});
    }
};

const getProduct = async (req,res) => {
    try{
        const { id }=req.params;
        const obj = await product.findById(id);
        console.log(obj);
        if(!obj) res.status(200).json({message:"product not found"});
        else res.status(200).json(obj);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

const updateProduct = async (req,res) => {
    try{
        const {id} =req.params;
        const obj = await product.findByIdAndUpdate(id,req.body);
        if(!obj){
            res.status(400).json({message:"product not found"});
        }
        const updated_obj= await product.findById(id);
        res.status(200).json(updated_obj);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const deleteProduct = async (req,res) => {
    try{
        const {id} = req.params;
        const obj = await product.findByIdAndDelete(id);
        if(!obj){
            res.status(400).json({message:"product not found"});
        }
        else{
            res.status(200).json({message:"deleted successfully"});
        }
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports={
    getProducts,
    getProduct,
    updateProduct,
    createProducts,
    deleteProduct
}