const { response } = require('express');
const User = require('../models/User');

const createUser = async (request, resp = response) => {
  //const { name, email, password } = request.body;

  try {
    const newUser = new User(request.body);

    await newUser.save();

    resp.status(201).json({
      ok: true,
      msg: 'registro',
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
