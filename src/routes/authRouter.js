let express = require('express');
let { RegisterUser, LoginUser } = require('../controller/authentication_controller');

let router = express.Router();

router.post('/register', RegisterUser);
router.post('/login', LoginUser);

module.exports = router;