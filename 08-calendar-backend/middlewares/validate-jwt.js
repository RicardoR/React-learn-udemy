const { response } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = (req, res = response, next) => {
  const token = req.header('x-token');
  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'Missing token',
    });
  }

  try {
    // El token tiene encriptado el id del usuario y su nombre. Esto se lo ponemos a cada
    // request para luego comprobar si es el dueño
    const payload = jwt.verify(token, process.env.SECRET_JWT_SEED);
    req.uid = payload.uid;
    req.name = payload.name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Invalid token',
    });
  }
  next();
};

module.exports = { validateJWT };
