const { response } = require('express');

const createUser = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'registro',
  });
};

const performLogin = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'login',
  });
};

const renewToken = (request, resp = response) => {
  resp.json({
    ok: true,
    msg: 'renew',
  });
};

module.exports = { createUser, performLogin, renewToken };
