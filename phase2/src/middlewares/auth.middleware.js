import { ApiError } from '../utils/ApiError.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js'

export const VerifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "");

        if(!token){
            throw new ApiError(401, "Unauthorised request -  No Token provided. ")
        }

        // verify the token.
        let decodedToken;
        try {
            
            decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        } catch (jwterror) {
            console.log("JWT verification error: ", jwterror.message)
            throw new ApiError(401, "Invalid access Token - token verification failed.")
        }


        const user = await User.findById(decodedToken?._id).select("-password -refereshToken")

        if(!user){
            throw new ApiError(401, "Invalid AccessToken - User not found");
        }

        req.user = user;
        next();

    } catch (error) {
        // to not to mask the original error.
        if (error instanceof ApiError) {
            throw error;
        }
        //  for unexpected behaviour.
        console.log("Auth Middleware Unexpeceted Behaviour error: ", error);
        throw new ApiError(401, `Authentication failed: ${error.message}`)


    }
})