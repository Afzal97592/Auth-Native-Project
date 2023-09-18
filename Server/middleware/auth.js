import jwt from "jsonwebtoken";

import { User } from "../models/users.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ success: false, message: "Login First" });
    }
    const deCoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(deCoded._id);
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
