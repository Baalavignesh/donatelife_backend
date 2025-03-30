const BankRequestSchema = require('../models/Request');
const User = require('../models/User');

let CreateBankRequest = async (req, res) => {
    try {
        let bankRequest = req.body;
        console.log(bankRequest);
        try {   
            // Validate required fields
            if (!bankRequest.id || !bankRequest.location || !bankRequest.group) {
                return res.status(400).json({ message: "Missing required fields: id, location, and group are required" });
            }
            
            const newBankRequest = new BankRequestSchema(bankRequest);
            const savedUser = await newBankRequest.save();
            res.status(200).json(savedUser);
        }
        catch (error) {
            console.error("Error creating bank request:", error);
            res.status(500).json({ message: "Error creating bank request", error: error.message });
        }
    }
    catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: error.message });
    }
}   

let GetBankRequest = async (req, res) => {
    try {
        console.log(req.params.id);

        let bankRequest = await BankRequestSchema.find({id: req.params.id}); 
        if (!bankRequest) {
            return res.status(404).json({ message: "Bank request not found" });
        }
        res.status(200).json(bankRequest);
    }
    catch (error) {
        console.error("Error fetching bank request:", error);
        res.status(500).json({ message: error.message });
    }
}   

let UpdateBankRequest = async (req, res) => {
    try {
        let bankRequest = await BankRequestSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!bankRequest) {
            return res.status(404).json({ message: "Bank request not found" });
        }
        res.status(200).json(bankRequest);
    }
    catch (error) {
        console.error("Error updating bank request:", error);
        res.status(500).json({ message: error.message });
    }
}           

let GetSpecificBloodGroup = async (req, res) => {
    try {
        console.log(req.params);
        let bloodGroup = req.params.blood_group;
        let bankRequest = await User.find({ bloodGroup: bloodGroup});
        console.log(bankRequest);
        res.status(200).json(bankRequest);
    }
    catch (error) {
        console.error("Error fetching bank request:", error);
        res.status(500).json({ message: error.message });
    }
}

let GetUsersWithinRadius = async (req, res) => {
    try {
        const { longitude, latitude, radius, bloodGroup } = req.body;
        
        // Validate required fields
        if (!longitude || !latitude || !radius) {
            return res.status(400).json({ 
                message: "Missing required fields: longitude, latitude, and radius are required" 
            });
        }

        // Build the query
        let query = {
            location: {
                $nearSphere: {
                    $geometry: {
                        type: "Point",
                        coordinates: [parseFloat(longitude), parseFloat(latitude)]
                    },
                    $maxDistance: parseFloat(radius) * 1000 // Convert km to meters
                }
            }
        };

        // Add blood group filter if provided
        if (bloodGroup) {
            query.bloodGroup = bloodGroup;
        }

        // Execute the query
        const users = await User.find(query);
        
        console.log(`Found ${users.length} users within ${radius}km radius`);
        res.status(200).json(users);
    }
    catch (error) {
        console.error("Error finding users within radius:", error);
        res.status(500).json({ message: error.message });
    }
}

let SendSMS = async (req, res) => {
    try {
        const { recipients, message } = req.body;
        
        if (!recipients || !message || !Array.isArray(recipients)) {
            return res.status(400).json({ 
                message: "Invalid request: recipients array and message are required" 
            });
        }
        
        const axios = require('axios');
        const results = [];
        
        // Send SMS to each recipient
        for (const recipient of recipients) {
            try {
                const response = await axios.post('https://textbelt.com/text', {
                    phone: recipient.phone,
                    message: message,
                    key: 'textbelt', // You might want to store this in an env variable
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                
                results.push({
                    recipient: recipient,
                    success: response.data.success,
                    message: response.data.message || 'Message sent successfully',
                });
            } catch (error) {
                results.push({
                    recipient: recipient,
                    success: false,
                    message: error.message || 'Failed to send message',
                });
            }
        }
        
        res.status(200).json({
            overallSuccess: results.some(r => r.success),
            results: results
        });
    } catch (error) {
        console.error("Error sending SMS:", error);
        res.status(500).json({ message: "Error sending SMS", error: error.message });
    }
};

module.exports = { CreateBankRequest, GetBankRequest, UpdateBankRequest, GetSpecificBloodGroup, GetUsersWithinRadius, SendSMS };