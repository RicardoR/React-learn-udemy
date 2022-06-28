/*
    Auth routes  / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { createUser, performLogin, renewToken } = require('../controllers/auth');

const router = Router();

router.post('/new', createUser);

router.post('/', performLogin);

router.get('/renew', renewToken);

module.exports = router;
