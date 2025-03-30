const BankRequestSchema = require("../models/Request");

let GetSpecificBankRequest = async (req, res) => {
    try {
        console.log(req.params.blood_group);

        let bankRequest = await BankRequestSchema.find({group: req.params.blood_group}); 
        if (bankRequest.length === 0) {
            return res.status(404).json({ message: "No bank requests found for this blood group" });
        }
        res.status(200).json(bankRequest);
    }
    catch (error) {
        console.error("Error fetching bank request:", error);
        res.status(500).json({ message: error.message });
    }
}   

module.exports = { GetSpecificBankRequest };
