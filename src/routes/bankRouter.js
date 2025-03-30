let express = require('express');
const { CreateBankRequest, GetBankRequest, UpdateBankRequest, GetSpecificBloodGroup, GetUsersWithinRadius, SendSMS } = require('../controller/bank_controller');

let router = express.Router();

router.post('/createbankrequest', CreateBankRequest);
router.get('/getbankrequest/:id', GetBankRequest);
router.put('/updatebankrequest/:id', UpdateBankRequest);
router.get('/getspecificbloodgroup/:blood_group', GetSpecificBloodGroup);
router.post('/getuserswithinradius', GetUsersWithinRadius);
router.post('/sendsms', SendSMS);

module.exports = router;