const authorize = (requiredRoles) => {
  return (req, res, next) => {
    const { role } = req.user;

    if (!requiredRoles.includes(role)) {
      return res.status(403).json({ error: "Forbidden" });
    }

    next();
  };
};

module.exports = {
  authorize,
};
