import { Product } from "../modals/productModal.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncModule } from "../utils/AsyncronusModule.js";
import { CloudnaryStep } from "../utils/Cloudnary.js";
import slugify from 'slugify'

import { Category } from "../modals/categoryModal.js";



export const createProductController=AsyncModule(async(req,res)=>{
    const{name, description, price, category,stock, status}=req.body;

    if([name, description, price, category, status].some(field=> field.trim() === "")){
    throw new ApiError(403, "All fields are required")
    }

    // if (!req.files || !req.files.productImage || !req.files.productImage[0].path) {
    //     throw new ApiError(403, "Product image is required");
    // }

    const localProductImage=req.files?.productImage[0]?.path;
    if(!localProductImage){
        throw new ApiError(403, "product Image required")
    }
    const productImage=await CloudnaryStep(localProductImage);
    if(!productImage.url){
        throw new ApiError(403, "product Images are not found on cloudnary")
    }
    
  
    
    const product=await Product.create({name,slug:slugify(name),description,price,category,stock,status, productImage:productImage.url});
   

    if(!product){
        throw new ApiError(500, "Product cannot created successfully")
    }
    return res.status(200).json(
        new ApiResponse(200, product, "Product created successfully")
    )
})



// export const updateProductController=AsyncModule(async(req,res)=>{
//     const{name, description, price, category,stock, slug}=req.body;

//     if([name, description, price, category].some(field=> field.trim() === "")){
//     throw new ApiError(403, "All fields are required")
//     }

//     // if (!req.files || !req.files.productImage || !req.files.productImage[0].path) {
//     //     throw new ApiError(403, "Product image is required");
//     // }

//     const localProductImage=req.files?.productImage[0]?.path;
//     if(!localProductImage){
//         throw new ApiError(403, "product Image required")
//     }
//     const productImage=await CloudnaryStep(localProductImage);
//     if(!productImage.url){
//         throw new ApiError(403, "product Images are not found on cloudnary")
//     }
    
  
    
//     const product=await Product.findByIdAndUpdate(req.params.id,{name,slug:slugify(name),description,price,category,stock, productImage:productImage.url},{new:true});
    

//     if(!product){
//         throw new ApiError(500, "Product cannot update successfully")
//     }
//     return res.status(200).json(
//         new ApiResponse(200, product, "Product update successfully")
//     )
// })


export const updateProductController = AsyncModule(async (req, res) => {
    const { name, description, price, category, stock , status} = req.body;
  
    if ([name, description, price, category, status].some((field) => field.trim() === "")) {
      throw new ApiError(403, "All fields are required");
    }
  
    let productImage = {}; 
    if (req.files && req.files.productImage && req.files.productImage.length > 0) {
      const localProductImage = req.files.productImage[0].path;
      productImage = await CloudnaryStep(localProductImage);
      if (!productImage || !productImage.url) {
        throw new ApiError(403, "Product images are not found on Cloudinary");
      }
    }
  
    const updateFields = {
      name,
      slug: slugify(name),
      description,
      price,
      category,
      stock,
      status,
      productImage: productImage.url || undefined,
    };
  
    const product = await Product.findByIdAndUpdate(req.params.id, updateFields, { new: true });
  
    if (!product) {
      throw new ApiError(500, "Product cannot be updated successfully");
    }
  
    return res.status(200).json(new ApiResponse(200, product, "Product updated successfully"));
  });
  



export const getProductController=AsyncModule(async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id);
    if(!product){
        throw new ApiError(500, "Product not found")
    }
    return res.status(200).json(
        new ApiResponse(200, product, "Product Access Successfully")
    )
})


export const getAllProductController=AsyncModule(async(req,res)=>{
    const product=await Product.find({})
    if(!product){
        throw new ApiError(500, "Products are not found in database")
    }
    return res.status(200).json(
        new ApiResponse(200, product, "All products list are here")
    )
})


export const deleteProductController=AsyncModule(async(req,res)=>{
    const {id}=req.params;
    const product=await Product.findByIdAndDelete(id);
    if(!product){
        throw new ApiError(500, "Product not deleted successfully")
    }
    return res.status(200).json(
        new ApiResponse(200, product, "Product deleted  Successfully")
    )
})



export const filterProductController=AsyncModule(async(req,res)=>{
    const {checked}=req.body;
    let args={};

    if(checked.length > 0) args.category=checked;
    const product=await Product.find(args);
    if(!product){
        throw new ApiError(500, "Product not filter successfully")
    }
    return res.status(200).json(
        new ApiResponse(200, product, "product filter successfully")
    )
    return res.status(200).json(
        new ApiResponse(200, product, "Product cannot filter Successfully")
    )
})


export const totalProductController=async(req,res)=>{
    try {
        const total=await Product.find({}).estimatedDocumentCount();
         res.status(200).send({
            success:true,
            total
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,

        })
        
    }
   
}

export const paginationProductController=async(req,res)=>{
    try {
        const perPage=8;
        const page=req.params.page ? req.params.page : 1;
        const product=await Product.find({}).limit(perPage).skip((page-1)*perPage).sort({createdAt:-1})
       
     
         return res.status(200).json({
            success:true,
            product,
            message:"Product found successfully"
         }
            
         )
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
        })

        
    }
    
  
}


export const categoryProductController=async(req, res)=>{
    try {

    const category=await Category.findOne({slug:req.params.slug})
    const product=await Product.find({category}).populate("category")

    return res.status(200).json({
        success:true,
        message:"Product founds",
        category,
        product
    })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Error Occur in product fetching"
        })
    }

}


export const similarProductController=AsyncModule(async(req,res)=>{
    const {pid, cid}=req.params
   
    const products=await Product.find({
        category:cid,
        _id:{$ne:pid}
    }).populate("category").limit("5")
    if(!products){
       throw new ApiError (500, error, "product not found")
    }
   return  res.status(200).json(
        new ApiResponse (200, products, "Product Found successfully")
    )
})


    
