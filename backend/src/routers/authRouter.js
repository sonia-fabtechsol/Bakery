import express from 'express'
import { allUserController, deleteUserController, loginController, registerController, testController, updateUserController, userController } from '../controllers/userController.js';
import {upload} from '../middlewares/MulterUploder.js'
import { authenticateUser, isAdmin } from '../middlewares/requiredSignIn.js';


const authRouter=express.Router()

authRouter.post('/register',upload.fields([
    {
        name:'avatar',
        maxCount:1
    }
]) ,  registerController);
authRouter.post('/login', loginController);
authRouter.get('/get-user/:id', userController);
authRouter.put('/update-user/:id',authenticateUser,upload.fields([
    {
        name:'avatar',
        maxCount:1
    }
]) ,updateUserController)
authRouter.get('/alluser', allUserController);
authRouter.delete('/delete-user/:id', authenticateUser,isAdmin, deleteUserController)
authRouter.get('/test', authenticateUser,isAdmin, testController)
authRouter.get('/admin-route',authenticateUser, isAdmin, (req,res)=>{
    res.status(200).send({
        ok:true,
        message:"Admin Route"
    })
} )

export default authRouter