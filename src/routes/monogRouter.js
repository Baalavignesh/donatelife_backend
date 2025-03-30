let express = require('express');
const { CreateBankRequest, GetBankRequest, UpdateBankRequest, GetSpecificBankRequest } = require('../controller/bank_controller');

let router = express.Router();

router.post('/createbankrequest', CreateBankRequest);
router.get('/getbankrequest/:id', GetBankRequest);
router.put('/updatebankrequest/:id', UpdateBankRequest);

// for user to get specific bank request
router.get('/getspecificbankrequest/:id', GetSpecificBankRequest);

module.exports = router;