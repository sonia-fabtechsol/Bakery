import { User } from "../modals/userModal.js";
import { AsyncModule } from "../utils/AsyncronusModule.js";
import { AsyncHandle } from "../utils/AsyncronusModule.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { comparePassword, hashPassword } from "../utils/passwordHelper.js";
import { SchemaTypeOptions } from "mongoose";
import { CloudnaryStep } from "../utils/Cloudnary.js";

const CreateFreshandAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    // console.log(user)
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "something wrong in Token creation");
  }
};

export const registerController = AsyncModule(async (req, res) => {
  const { name, email, password, address, phone } = req.body;

  //Apply Validation required fields
  if (
    [name, email, password, address, phone].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "field are required");
  }

  //check existing user
  const existingUser = await User.findOne({
    $or: [{ name, email }],
  });
  if (existingUser) {
    throw new ApiError(409, "User name or email already exist");
  }

  const hashedPassword = await hashPassword(password);

  const avatarLocalFile = req.files?.avatar[0]?.path;
  if (!avatarLocalFile) {
    throw new ApiError(409, "avatar images are required");
  }

  const avatar = await CloudnaryStep(avatarLocalFile);
  if (!avatar) {
    throw new ApiError(409, "avatar cannot upload on cloudnary");
  }

  //create user Object
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    address,
    phone,
    avatar: avatar.url,
  });

  //remove user password from sending data to user
  const createdUser = await User.findById(user._id).select("-password");
  if (!createdUser) {
    throw new ApiError(505, "User cannot Created successfully");
  }

  return res
    .status(200)
    .json(new ApiResponse(201, createdUser, "User created successfully"));
});

export const loginController = AsyncModule(async (req, res) => {
  const { name, email, password } = req.body;
  if (!(email || password)) {
    throw new ApiError(409,  "Invalid Email or password");
  }

  const user = await User.findOne({
    $or: [{ name }, { email }],
  });
  if (!user) {
    throw new ApiError(400, "E-mail cannot register");
  }

  const comparedPassword = await comparePassword(password, user.password);
  if (!comparedPassword) {
    throw new ApiError(401, "Invalid password or user Name");
  }

  const logedInUser = await User.findById(user._id).select("-password");

  const { accessToken, refreshToken } = await CreateFreshandAccessToken(
    user._id
  );

  const options = {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  };

  return res
    .status(200)
    .cookie("Access_Token", accessToken, options)
    .cookie("Refesh_Token", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        logedInUser,
        "User Login successfully",
        refreshToken,
        accessToken
      )
    );
});

export const userController = AsyncModule(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, user, "User data found successfully"));
});

export const allUserController = AsyncModule(async (req, res) => {
  const user = await User.find({});
  if (!user) {
    throw new ApiError(404, "Users not found");
    console.log("user not find");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, user, "All Users found successfully"));
});

// export const updateUserController = AsyncModule(async (req, res) => {
//   const { name, email, address, phone } = req.body;
//   if (
//     [name, email, address, phone].some(
//       (field) => field?.trim() === ""
//     )
//   ) {
//     throw new ApiError(400, "field are required");
//   }
//   let avatar = {}; 
//   if (req.files && req.files.avatar && req.files.avatar.length > 0) {
//     const localAvatarImage = req.files.avatar[0].path;
//     avatar = await CloudnaryStep(localAvatarImage);
//     if (!avatar || !avatar.url) {
//       throw new ApiError(403, "Product images are not found on Cloudinary");
//     }
//   }
//   const user = await User.findByIdAndUpdate(
//     req.params.id,
//     {
//       name,
//       email,
//       address,
//       phone,
//       avatar: avatar.url || undefined,
//     },
//     { new: true }
//   );

//   return res
//     .status(200)
//     .json(new ApiResponse(201, user, "User update successfully"));
// });


export const updateUserController = AsyncModule(async (req, res) => {
  const { name, email, address, phone } = req.body;
  if ([name, email, address, phone].some(field => !field.trim())) {
    throw new ApiError(400, "All fields are required");
  }
  let avatarUrl = ""; 
  if (req.files && req.files.avatar && req.files.avatar.length > 0) {
    const localAvatarImage = req.files.avatar[0].path;
    const avatar = await CloudnaryStep(localAvatarImage);
    if (!avatar || !avatar.url) {
      throw new ApiError(403, "Avatar image not found on Cloudinary");
    }
    avatarUrl = avatar.url; 
  }
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      name,
      email,
      address,
      phone,
      avatar: avatarUrl || undefined
    },
    { new: true }
  );

  const updatedUser = await User.findById(user._id).select("-password");
  if (!updatedUser) {
    throw new ApiError(500, "User update failed");
  }
  return res.status(200).json(new ApiResponse(200, updatedUser, "User updated successfully"));
});

export const deleteUserController = AsyncModule(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    throw new ApiError(404, "User not delete");
  }
  return res
    .status(200)
    .json(new ApiResponse(200, user, "User deleted successfully"));
});

//test controller
export const testController = async (req, res) => {
  try {
    res.send({
      message: "welcome test middleware",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error occcur in authentication user",
      error,
    });
  }
};
