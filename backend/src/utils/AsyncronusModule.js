const AsyncModule=(fn) => async(req,res,next)=>{
    try {
        await fn(req,res,next)
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

export {AsyncModule}


const AsyncHandle=(responseHandler)=>{
    async(req,res,next)=>{
        Promise.resolve(responseHandler(req,res,next)).catch((error)=> next(error))
    }
}

export {AsyncHandle}