class ApiError extends Error{
    constructor(statusCode, message="something wrong", errors=[], stack="")
    {
        super(message)
        this.statusCode=statusCode
        this.message=message
        this.errors=errors
 
    if(stack){
        this.stack=stack;
    }
    else
    {
        Error.captureStackTrace(this.constructor);
    }
}
}

export {ApiError}