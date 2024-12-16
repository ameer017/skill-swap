const asyncHandler = require("express-async-handler");
const User = require("../model/userCollection");

// @desc Register a new user
// @route POST /api/users
// @access Public