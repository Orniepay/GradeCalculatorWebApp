require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const GradeCalculatorLogin = require('./models/gradecalculator-login');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080', // Replace with your frontend origin
  credentials: true // Allow sending cookies
}));
app.use(cookieParser());

mongoose.connect('mongodb://127.0.0.1:27017/gradecalculator-login', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Register routes here after the middleware setup
app.use('/api', authRoutes);
app.use(express.urlencoded({ extended: false }));

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    GradeCalculatorLogin.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Successful!");
                } else {
                    res.status(400).json("Incorrect Password! Try Again.");
                }
            } else {
                res.status(404).json("No Record Found");
            }
        })
        .catch(err => res.status(500).json("Internal Server Error"));
});

app.post('/register', (req, res) => {
    GradeCalculatorLogin.create(req.body)
        .then(user => res.status(201).json({ message: "User Registered Successfully!" }))
        .catch(err => res.status(500).json({ message: "Internal Server Error" }));
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
