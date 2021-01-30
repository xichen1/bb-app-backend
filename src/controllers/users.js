const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/user');

usersRouter.post('/', async (req, res, next) => {
  const body = req.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds).catch(err => console.log(err.message));

  const oldUser = await User.findOne({ username: body.username });
  if (oldUser) {
    return res.status(403).json({ error: 'already occupied' });
  }

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();

  res.json(savedUser).catch(error => {
    next(error);
  });
});

usersRouter.get('/', async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

module.exports = usersRouter;