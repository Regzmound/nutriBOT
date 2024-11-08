const express = require('express');
const signupController = require('../controller/signup.controller'); 

const router = express.Router();

router.use('/', signupController); 

module.exports = router;
