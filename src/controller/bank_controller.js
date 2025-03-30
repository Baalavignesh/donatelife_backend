const BankRequestSchema = require('../models/Request');

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

module.exports = { CreateBankRequest, GetBankRequest, UpdateBankRequest };