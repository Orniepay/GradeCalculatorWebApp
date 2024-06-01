var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

let User = require('../models/User');

// Route to display the registration form
router.get('/register', function(req, res, next) {
  res.render('userRegistrationForm');
});

// Register new user
router.post('/register', (req, res, next) => {
  data = req.body;
  User.create(data, (err, user) => {
    if (err) return next(err);
    res.redirect('/users/login');
  });
});

// Route handler for displaying the login form
router.get('/login', (req, res, next) => {
  res.render('userLoginForm');
});

// Handle login POST request
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).render('userLoginForm', {
        error: 'Please provide both email and password',
      });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(400).render('userLoginForm', {
        error: 'Invalid email or password',
      });
    }

    // Check if the password is correct using checkPassword method
    user.checkPassword(password, (err, isMatch) => {
      if (err) return next(err);

      if (!isMatch) {
        return res.status(400).render('userLoginForm', {
          error: 'Invalid email or password',
        });
      }

      // If password matches
      console.log('Login successful');
      res.send('Login successful');
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

router.post('/login', (req, res, next) => {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.redirect('/users/login');
  }

  User.findOne({ email }, (err, user) => {
    if (err) return next(err);

    if (!user) {
      return res.redirect('/users/login');
    }

    user.checkPassword(password, (err, isMatch) => {
      if (err) return next(err);
      if (!isMatch) {
        console.log('Invalid password');
        return res.redirect('/users/login');
      } else {
        console.log('Login successful');
        res.send('Login successful');
      }
    });
  });
});
