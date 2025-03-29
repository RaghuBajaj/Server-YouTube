import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler( async ( req, res) => {
    // res.status(200).json({ message: " ok, It is working properly "});

    // get user details from frontend
    // validation - not empty
    // check if user already exist: username, email
    // // check for images, check for avatar 
    // upload them to ...., avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation 
    // return res 

    const { fullName, email, username, password } = req.body ; // .body is provi ded by express
    
    if( [ fullName, email, username, password ].some((field)=> field?.trim() === "" ) ){
        throw new ApiError(400, " All fields are required !");
    }

    const existedUser = User.findOne({
        $or:[ { username }, { email }]
    })

    if(existedUser){
        throw new ApiError(400, "User with email or username already exists")
    }
    
    //... creation and upload of avatar and coverimage is pending 
     
    const newUser = await User.create({
        fullName,
        email,
        password,
        username: username.toLowerCase(),
    })

    const createdUser = await User.findById(newUser._id).select( "-password -refreshToken" )

    if(!createdUser){
        throw new ApiError(500, "Something went wrong while  registering the user")
    }

    return res.status(201).json( 
        new ApiResponse(200, createdUser, "User registered successfully")
    );
    

    /* console.log("email: ", email);*/
    /*
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.file?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required")
    };*/

    // const avatar = await uploadOnCloudinary(avatarLocalPath);
    // const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    // if(!avatar){
    //     throw new ApiError(400, "Avatar file is required")
    // }

    /*const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username:username.toLowerCase()
    });*/
});

const loginUser = asyncHandler( async (req, res) => {
    // usermane, email,password required
    // check if it exists
    // return res

    const { username, email, password } = req.body ;

    if( [ username, email, password ].some((field)=> field?.trim() === "" ) ){
        throw new ApiError(401, "All fields are required")
    }

    const existedUser = await User.findOne({
        $and: [{username}, {email}]
    })

    if(!existedUser){
        throw new ApiError(405, "User does not exist")
    }

    const isPasswordValid = await existedUser.isPasswordCorrect(password);

    if(!isPasswordValid){
        throw new ApiError(405, "Invalid password!")
    }

    const loggedIn = await User.findById(existedUser._id).select(" -password -refreshToken");

    return res.status(201).json(
        new ApiResponse(200, loggedIn, "user loged in successfully")
    );
});

const logoutUser = asyncHandler( async (req, res) => {
    //
});

const working = asyncHandler( async (req, res) => {
    //const request = req.body;
    // console.log("request: ", req.body);
    return res.status(200).json({ message: ` ok, your request is working properly `,});
});

export { registerUser, loginUser, logoutUser, working };        