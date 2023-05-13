const router = require('express').Router();
const userController = require('../controller/users');

/**
 * get user by id
 * @method GET
 */
router.get('/:userId', userController.getUserByID);

/**
 * update user by id
 * @method PUT
 */
router.put('/:userId', userController.putUserById);

/**
 * update user by id
 * @method PATCH
 */
router.patch('/:userId', userController.patchUserById);

/**
 * delete user by id
 * @method DELETE
 */
router.delete('/:userId', userController.deleteUserById);

/**
 * Get all users, include:
 *  - filter
 *  - sort
 *  - pagination
 *  - select properties
 * @route /api/v1/users?sort=["by","name"]
 * @method GET
 * @visibility private
 */
router.get('/', userController.getUsers);

/**
 * create a new user
 * @method POST
 */
router.post('/', userController.postUser);

module.exports = router;
