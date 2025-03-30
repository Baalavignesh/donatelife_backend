const twilio = require("twilio");

const sendSMS = async (req, res) => {
  const { phone, message } = req.body;
};

module.exports = { sendSMS };
