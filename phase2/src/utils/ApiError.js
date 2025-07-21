/* in this ApiErrors Utility we gonna inheri the error the base class and we gonna override it with our own response */

class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){  
        super(message); // when parent class is extended before the use of this keyword we use super -- to call method from parent class.
        this.statusCode = statusCode;
        this.data = null;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
export {ApiError};