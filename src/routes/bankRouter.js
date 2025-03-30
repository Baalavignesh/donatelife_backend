let express = require('express');
const { CreateBankRequest, GetBankRequest, UpdateBankRequest, GetSpecificBloodGroup } = require('../controller/bank_controller');

let router = express.Router();

router.post('/createbankrequest', CreateBankRequest);
router.get('/getbankrequest/:id', GetBankRequest);
router.put('/updatebankrequest/:id', UpdateBankRequest);
router.get('/getspecificbloodgroup/:blood_group', GetSpecificBloodGroup);

module.exports = router;