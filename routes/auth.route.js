const express = require('express');
const { AuthUserController } = require('../controllers/auth/authUser.controller');
const router = express.Router();

router.post('/', AuthUserController);

module.exports = router;