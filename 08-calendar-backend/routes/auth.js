/*
    Auth routes  / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, performLogin, renewToken } = require('../controllers/auth');

const router = Router();

router.post(
  '/new',
  [
    // middelwares
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should contain 6 characters').isLength({
      min: 6,
    }),
  ],
  createUser
);

router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password should contain 6 characters').isLength({
      min: 6,
    }),
  ],
  performLogin
);

router.get('/renew', renewToken);

module.exports = router;
