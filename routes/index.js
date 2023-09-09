const express = require('express');
const router = express.Router();
const appControllers = require('../controllers/appControllers');

router.get('/', appControllers.submit);

module.exports = router;