import express from 'express'
import { createCategoryController, deleteCategoryController, getAllcategoryController, updateCategoryController } from '../controllers/categoryController.js'
import { authenticateUser, isAdmin } from '../middlewares/requiredSignIn.js'
const router=express.Router()

router.post('/create-category', createCategoryController)
router.get('/all-category', getAllcategoryController)
router.put('/update-category/:id', authenticateUser, isAdmin, updateCategoryController)
router.delete('/delete-category/:id', authenticateUser,isAdmin, deleteCategoryController)
export default router