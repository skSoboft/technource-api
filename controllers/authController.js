const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwt');
//const users = require('../data/users'); // Replace with your user data

const login = (req, res) => {
  const { username, password } = req.body;

  //const user = users.find((user) => user.username === username);

//   if (!user || !bcrypt.compareSync(password, user.password)) {
//     return res.status(401).json({ error: 'Invalid credentials' });
//   }

  const token = generateToken({ userId: user.id, role: user.role });

  res.json({ token });
};

module.exports = {
  login,
};
