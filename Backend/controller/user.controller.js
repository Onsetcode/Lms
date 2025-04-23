const bcryptjs = require("bcryptjs");
const User = require("../model/user.model"); // Adjust the path as needed

// user signup
exports.signup = async (req, res) => {
  try {
    const { FullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: true, message: "user already exist" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      FullName: FullName,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();
    return res.status(201).json({
      message: "user created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error : ", error.message);
    return res.status(500).json({ message: "internal server error" });
  }
};

// user login
exports.login = async (req, res) => {
  try {
    const { email, password } = await req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // If user not found or password doesn't match
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Successful login
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        FullName: user.FullName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
      error: error.message, // Only send error.message to avoid exposing full stack in production
    });
  }
};
