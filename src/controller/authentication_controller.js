const DonorOrg = require('../models/DonorOrg');
const User = require('../models/User');

let RegisterUser = async (req, res) => {
    try {
        // Get user data from request body
        let userData = req.body;
        console.log("Registration attempt with data:", userData);
        
        // First, check if a user with this username already exists
        const existingUser = await User.findOne({ username: userData.username });
        
        if (existingUser) {
            console.log(`User with username '${userData.username}' already exists in the database`);
            return res.status(400).json({
                success: false,
                message: "User with that username already exists"
            });
        }
        
        console.log(`No existing user found with username '${userData.username}', proceeding with registration`);
        
        // Parse age to number if it's a string
        if (userData.age && typeof userData.age === 'string') {
            userData.age = parseInt(userData.age, 10);
        }
        
        // Format phone number to remove any non-numeric characters
        if (userData.phoneNumber) {
            userData.phoneNumber = userData.phoneNumber.replace(/\D/g, '');
        }
        
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
        // Handle duplicate key errors (username already exists)
        if (error.code === 11000) {
            console.log("MongoDB duplicate key error (11000):", error);
            return res.status(400).json({
                success: false,
                message: "User with that username already exists"
            });
        }
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const validationErrors = {};
            
            // Extract validation error messages
            for (const field in error.errors) {
                validationErrors[field] = error.errors[field].message;
            }
            
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: validationErrors
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
        console.log("Login attempt for username:", username);
        
        // Find user in database
        const user = await User.findOne({ username });
        const donorOrg = await DonorOrg.findOne({ username });
        
        console.log(user, donorOrg);
        // Check if user exists and password matches
        if (!user && !donorOrg) {
            console.log(`No user found with username '${username}'`);
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        console.log(`User found with username '${username}', verifying password`);
        
        
        
        // Return success response with user data (excluding password)
        if(user){
            if (user.password !== password && donorOrg.password !== password) {
                console.log(`Invalid password for username '${username}'`);
                return res.status(401).json({
                    success: false,
                    message: "Invalid password"
                });
            }
                const userData = user.toObject();
            delete userData.password;
            return res.status(200).json({
                success: true,
                message: "User logged in successfully",
                userId: user._id,
                userInfo: userData
            });
        }
        else{
            const donorOrgData = donorOrg.toObject();
                delete donorOrgData.password;
            return res.status(200).json({
                success: true,
                message: "Donor organization logged in successfully",
                userId: donorOrg._id,
                userInfo: donorOrgData
            });
        }
        
        
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({
            success: false,
            message: "Error logging in",
            error: error.message
        });
    }
};

let RegisterDonor = async (req, res) => {
    try {
        // Get user data from request body
        let orgData = req.body;
        console.log("Registration attempt with data:", orgData);
        
        // First, check if a user with this username already exists
        const existingUser = await User.findOne({ username: orgData.username });
        
        if (existingUser) {
            console.log(`User with username '${orgData.username}' already exists in the database`);
            return res.status(400).json({
                success: false,
                message: "User with that username already exists"
            });
        }
        
        console.log(`No existing user found with username '${orgData.username}', proceeding with registration`);
        
        // Parse age to number if it's a string
        if (orgData.age && typeof orgData.age === 'string') {
            orgData.age = parseInt(orgData.age, 10);
        }
        
        // Format phone number to remove any non-numeric characters
        if (orgData.phoneNumber) {
            orgData.phoneNumber = orgData.phoneNumber.replace(/\D/g, '');
        }
        
        // Create a new user using the Mongoose model
        const newUser = new DonorOrg(orgData);
        
        // Save the user to the database
        const savedUser = await newUser.save();
        
        // Return success response
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            userId: savedUser._id
        });
    } catch (error) {
        // Handle duplicate key errors (username already exists)
        if (error.code === 11000) {
            console.log("MongoDB duplicate key error (11000):", error);
            return res.status(400).json({
                success: false,
                message: "User with that username already exists"
            });
        }
        
        // Handle validation errors
        if (error.name === 'ValidationError') {
            const validationErrors = {};
            
            // Extract validation error messages
            for (const field in error.errors) {
                validationErrors[field] = error.errors[field].message;
            }
            
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: validationErrors
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

module.exports = { RegisterUser, LoginUser, RegisterDonor };  