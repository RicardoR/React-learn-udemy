const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt');

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

    // Generate JWT
    const token = await generateJWT(user.id, user.name);

    resp.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (err) {
    console.log(err);
    resp.status(500).json({
      ok: false,
      msg: `Error creating user: ${err.code}`,
    });
  }
};

const performLogin = async (request, resp = response) => {
  const { email, password } = request.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return resp.status(400).json({
        ok: false,
        msg: `Email or password incorrect`,
      });
    }

    // Confirm passwrod
    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return resp.status(400).json({
        ok: false,
        msg: `Password incorrect`,
      });
    }

    // Generate JWT
    const token = await generateJWT(user.id, user.name);

    return resp.json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(err);
    resp.status(500).json({
      ok: false,
      msg: `Error when login user: ${err.code}`,
    });
  }
};

const renewToken = async (request, resp = response) => {
  const { uid, name } = request;

  const token = await generateJWT(uid, name);

  resp.json({
    ok: true,
    uid,
    name,
    token,
  });
};

module.exports = { createUser, performLogin, renewToken };
