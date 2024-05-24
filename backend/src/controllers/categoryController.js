import { Category } from "../modals/categoryModal.js";
import { AsyncModule } from "../utils/AsyncronusModule.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import slugify from 'slugify'

//create category.............
export const createCategoryController=AsyncModule(async(req,res)=>{
    const {name,slug}=req.body;
    if(!name){
        throw new ApiError (500, "Category Name is required")
    }
    const category=await Category.create({name, slug:slugify(name)})
    if(!category){
        throw new ApiError(500, "category not found")
    }

    return res.status(200).json(
       new ApiResponse(200, category, "Category Created successfully")
    )

})

//get all category.............
export const getAllcategoryController=AsyncModule(async(req,res)=>{
    const category=await Category.find({});
    if(!category){
        throw new ApiError(500, "Category are not access")
    }
    return res.status(200).send(
        new ApiResponse(200, category, "All category access successfully",category.length)
    )
})

//delete category..............
export const deleteCategoryController=AsyncModule(async(req,res)=>{
    const {id}=req.params;
    const cdelete=await Category.findByIdAndDelete(id)
    if(!cdelete){
        throw new ApiError(500, "Eror in deleting category")
    }
    return res.status(200).send(
        new ApiResponse(200, cdelete, "Category deleted successfully")
    )
})

//update category............
export const updateCategoryController=AsyncModule(async(req,res)=>{
    const {name,slug}=req.body;
    if(!name){
        throw new ApiError (500, "Category Name is required")
    }
    const category=await Category.findByIdAndUpdate(req.params.id, {name, slug:slugify(name)}, {new:true})
    if(!category){
        throw new ApiError(500, "category not found for updating")
    }

    return res.status(200).json(
       new ApiResponse(200, category, "Category updated successfully")
    )

})