const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile } = require('../controllers/authController');

// middleware
router.use(
  cors({
    credentials: true, // Added to allow sending cookies
    origin: 'http://localhost:5173',
  })
);

router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser); // Added login route
router.get('/profile', getProfile)


module.exports = router;
