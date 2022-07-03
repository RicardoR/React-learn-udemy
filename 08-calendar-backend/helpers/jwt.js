const jwt = require('jsonwebtoken');

const generateJWT = (uid, userName) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, userName };
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      { expiresIn: '2h' },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Token not valid');
        }

        resolve(token);
      }
    );
  });
};

module.exports = { generateJWT };
