const User = require('../models/User');

let RegisterUser = async (req, res) => {
    try {
        // Get user data from request body
        let userData = req.body;
        
        // Create a new user using the Mongoose model
        const newUser = new User(userData);
        
        // Save the user to the database
        const savedUser = await newUser.save();
        
        // Return success response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            userId: savedUser._id
        });
    } catch (error) {
        // Handle duplicate key errors (username or email already exists)
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "User with that username or email already exists"
            });
        }
        
        console.error("Error registering user:", error);
        res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error.message
        });
    }
};

let LoginUser = async (req, res) => {   
    try {
        // Get login credentials from request body
        const { username, password } = req.body;
        
        // Find user in database
        const user = await User.findOne({ username });
        
        // Check if user exists and password matches
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        // Simple password check (in a real app, you should use bcrypt to compare hashed passwords)
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }
        
        // Return success response
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            userId: user._id
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({
            success: false,
            message: "Error logging in",
            error: error.message
        });
    }
};

module.exports = { RegisterUser, LoginUser };  