import mongoose from "mongoose";
import JWT from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
    },
    avatar:{
      type:String,
      required:true,

    },
    role: {
      type: String,
      default:"user"
    },
  },
  { timestamps: true }
);

userSchema.methods.generateAccessToken = function () {
  return JWT.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRATE_KEY,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY_DAY }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return JWT.sign({ _id: this._id }, process.env.FRESH_TOKEN_SECRATE_KEY, {
    expiresIn: process.env.FRESH_TOKEN_EXPIRY_DAY,
  });
};

export const User = mongoose.model("users", userSchema);
