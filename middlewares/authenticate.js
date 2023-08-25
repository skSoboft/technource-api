const { verifyToken } = require('../utils/jwt');

const authenticate = (requiredRoles) => {
  return (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { role } = decoded;

    if (requiredRoles && requiredRoles.length > 0 && !requiredRoles.includes(role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    req.user = decoded;
    next();
  };
};

module.exports = {
  authenticate,
};
