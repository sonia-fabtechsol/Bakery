import JWT from "jsonwebtoken";
import { User } from "../modals/userModal.js";


//required SignIn........
export const authenticateUser = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.FRESH_TOKEN_SECRATE_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Unauthorization error",
    });
  }
};



//Admin Middleware.......
export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User are not found",
      });
    }
    if (user.role !== "admin") {
      res.status(403).send({
        success: false,
        message: "user are not Admin",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log("error in admin middelware", error);
    res.status(500).send({
      success: false,
      error,
      message: "error is admin middle ware",
    });
  }
};
