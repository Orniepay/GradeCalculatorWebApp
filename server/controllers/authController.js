const User = require('../models/gradecalculator-login');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working');
};

// Register Endpoint
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if name was entered
        if (!name) {
            return res.json({ error: 'Name is required!' });
        }

        // Check if password is good
        if (!password || password.length < 6) {
            return res.json({ error: 'Password is required and should be at least 6 characters long!' });
        }

        // Check email
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: 'Email is taken already!' });
        }

        const hashedPassword = await hashPassword(password);

        // Create user in database
        const user = await User.create({ name, email, password: hashedPassword });
        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Login Endpoint
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json('No User Found');
        }

        // Check if passwords match
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(400).json('Incorrect Password! Try Again.');
        }

        // Create JWT token
        const token = jwt.sign(
            { email: user.email, id: user._id, name: user.name },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Set the cookie with the token
        res.cookie('token', token, { httpOnly: true }).json({ message: 'Login Successful!', token });
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server Error');
    }
};

const getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
        if (err) throw err;
        res.json(user);
      });
    } else {
      res.json(null);
    }
  };

module.exports = { test, registerUser, loginUser, getProfile };