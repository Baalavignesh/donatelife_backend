let express = require('express');
const { GetSpecificBankRequest } = require('../controller/donor_controller');

let router = express.Router();

// for user to get specific bank request
router.get('/getspecificbankrequest/:blood_group', GetSpecificBankRequest);

module.exports = router;