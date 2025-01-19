import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
  const {token} = req.headers;

  if (!token) {
    return res.status(401).json({message: 'Unauthorized'});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({message: 'Unauthorized'});
  }
};
