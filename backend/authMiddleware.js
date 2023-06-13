// authMiddleware.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
    const token = req.header('Authorization').split(' ')[1]; // Extract the token from the Authorization header

    if (!token) {
      return res.status(401).json({ message: 'Missing token, authorization denied' });
    }

    // Verify the token
    const decoded = jwt.verify(token, 'your-secret-key');

    // Add the user ID to the request object
    req.userId = decoded.userId;

    next(); // Proceed to the next middleware
  } catch (error) {
    console.error('Error:', error);
    res.status(401).json({ message: 'Invalid token, authorization denied' });
  }
};

module.exports = authenticate;
