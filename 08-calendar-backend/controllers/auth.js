const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const createUser = async (request, resp = response) => {
  const { email, password } = request.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return resp.status(400).json({
        ok: false,
        msg: `Email already in use`,
      });
    }

    user = new User(request.body);

    // Encrypt password:
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    resp.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (err) {
    console.log(err);
    resp.status(500).json({
      ok: false,
      msg: `Error creating user: ${err.code}`,
    });
  }
};

const performLogin = (request, resp = response) => {
  const { email, password } = request.body;

  resp.json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

const renewToken = (request, resp = response) => {
  const { token } = request.body;

  resp.json({
    ok: true,
    msg: 'renew',
    token,
  });
};

module.exports = { createUser, performLogin, renewToken };