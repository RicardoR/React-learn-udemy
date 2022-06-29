const { response } = require('express');

const createUser = (request, resp = response) => {
  const { name, email, password } = request.body;

  if (name.length < 5) {
    return resp.status(400).json({
      ok: false,
      msg: 'El nombre debe tener 5 caracteres',
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
