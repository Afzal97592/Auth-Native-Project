export const sendToken = (res, user, statusCode, message) => {
  const token = user.getJWTToken();
  console.log(token);

  const Options = {
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
  };
  console.log(Options);

  const userData = {
    _id: user._id,
    name: user.name,
    email: user.email,
    avatar: user.avatar,
    tasks: user.tasks,
    verified: user.verified,
  };

  res
    .status(statusCode)
    .cookie("token", token, Options)
    .json({ success: true, message, user: userData });
};