import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";

import jwt from "jsonwebtoken";

// Function to generate JWT token with expiration
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h' // Token expires in 1 hour
  });
};

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User is not authenticated!", 400));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    return next(new ErrorHandler("Invalid token!", 401));
  }
});


//AUTHORIZATION
export const isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `User with this role(${req.user.role}) not allowed to access this resource`
        )
      );
    }
    next();
  };
};
