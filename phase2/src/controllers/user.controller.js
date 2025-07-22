import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import { User } from '../models/user.model.js';

const registerUser = asyncHandler(async(req, res)=>{
    const{ fullname, username, email, password } = req.body;
    console.log("fullname: ", fullname, "email: ", email);

    // check if all required fields are there....
    if(
        [fullname, username, email, password].some((field)=>field?.trim() === "")
    ){
        throw new ApiError(400, "All field Required.")
    }

    // check if user is already exists.
    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })
    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists.")
    }

    // lets create user now.
    const user = await User.create({
        fullname,
        email,
        password,
        username: username.toLowerCase(),
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong during registration")
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registered successfully")
    )
})

const loginUser = asyncHandler(async(req, res)=>{

})

const logoutUser = asyncHandler(async(req, res)=>{

})

export {registerUser}