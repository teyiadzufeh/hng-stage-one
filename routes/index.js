const express = require('express');
const router = express.Router();
const appControllers = require('../controllers/appControllers');

router.get('/', appControllers.submit);
router.post('/', appControllers.createUser);
router.get('/:user_id', appControllers.fetchUser);
router.put('/:user_id', appControllers.updateUser);
router.delete('/:user_id', appControllers.deleteUser);

module.exports = router;