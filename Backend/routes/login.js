const express = require('express');
const router = express.Router();
const loginController = require('../controller/login.controller');

// Define the POST route for login
router.post('/', loginController.login);

module.exports = router;
