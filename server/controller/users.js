const User = require('../models/User');
const userService = require('../service/user');
const authService = require('../service/auth');
const error = require('../utils/error');

const getUsers = async (_req, res, next) => {
  /**
   * TODO: filter, sort, pagination, select
   */

  try {
    const users = await userService.findUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getUserByID = (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = userService.findUserByProperty('_id', userId);

    if (!user) throw error('User not found!', 404);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const postUser = async (req, res, next) => {
  const { name, email, password, roles, accountStatus } = req.body;

  try {
    const user = await authService.registerService({
      name,
      email,
      password,
      roles,
      accountStatus,
    });

    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const putUserById = (req, res, next) => {
  const { userId } = req.params;
  const { name, email, roles, accountStatus } = req.body;

  try {
    const user = userService.updateUser(userId, {
      name,
      email,
      roles,
      accountStatus,
    });

    if (!user) throw error('User not found!', 404);

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const patchUserById = async (req, res, next) => {
  const { userId } = req.params;
  const { name, roles, accountStatus } = req.body;

  try {
    const user = await userService.findUserByProperty('_id', userId);

    if (!user) throw error('User not found!', 404);

    user.name = name ?? user.name;
    user.roles = roles ?? user.roles;
    user.accountStatus = accountStatus ?? user.accountStatus;

    await user.save();

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const deleteUserById = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const user = await userService.findUserByProperty('_id', userId);

    if (!user) throw error('User not found!', 404);

    await user.remove();

    return res.status(203).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  getUserByID,
  postUser,
  putUserById,
  patchUserById,
  deleteUserById,
};
