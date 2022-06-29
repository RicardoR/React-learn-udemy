const { response } = require('express');
const { validationResult } = require('express-validator');

const createUser = (request, resp = response) => {
  const { name, email, password } = request.body;

  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return resp.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  resp.status(201).json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password,
  });
};

const performLogin = (request, resp = response) => {
  const { email, password } = request.body;

  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return resp.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

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
