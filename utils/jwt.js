const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const secret = process.env.JWT_SECRET;
  //   const options = {
  //     expiresIn: '1h',
  //   };
  //return jwt.sign(payload, secret, options);
  return jwt.sign(payload, secret);
};

const verifyToken = (token) => {
  const secret = process.env.JWT_SECRET;
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
