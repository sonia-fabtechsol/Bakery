import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    slug:{
        type:"String",
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:String,
        default:0
    },
    status:{
        type:String,
        enum:["In Stock", "Out Of Stock"],
        required:true,
        default:"In Stock"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true,
    },
    productImage:{
        type:String,
        required:true
    },
    // shipping:{
    //     type:Boolean,
    // }
}, {timestamps:true})


export const Product=mongoose.model('Product', productSchema);