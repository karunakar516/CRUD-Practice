const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required: [true, "please enter product name"],   
        },
        quantity :{
            type: Number,
            required :[true,"please enter quantity of product"],
            default:0
        },
        price:{
            type:Number,
            default:0,
            required:true
        }
    },
    {
        timestamps:true,
    }
);

const product = mongoose.model("Product",ProductSchema);
module.exports = product;