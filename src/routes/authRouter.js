let express = require('express');
let { RegisterUser, LoginUser, RegisterDonor } = require('../controller/authentication_controller');

let router = express.Router();

router.post('/register', RegisterUser);
router.post('/registerdonor', RegisterDonor);
router.post('/login', LoginUser);

module.exports = router;