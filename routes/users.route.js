const express = require('express');
const { createNewUserController } = require('../controllers/users/createNewUser.controller');
const { deleteUserController } = require('../controllers/users/deleteUser.controller');
const { getAllUsersController } = require('../controllers/users/getAllUsers.controller');
const { getOneUserController } = require('../controllers/users/getOneUser.controller');
const { updateUserController } = require('../controllers/users/updateUser.controller');

const router = express.Router();

/// IMPORTANCIÓN DE CONTROLADORES


router.post('/', createNewUserController);
router.delete('/:id', deleteUserController);
router.get('/', getAllUsersController);
router.get('/:id', getOneUserController);
router.put('/:id', updateUserController);

module.exports = router;