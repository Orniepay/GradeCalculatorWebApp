const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const GradeCalculatorLogin = require('./models/gradecalculator-login');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/gradecalculator-login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  GradeCalculatorLogin.findOne({ email: email })
    .then(user => {
      if(user) {
        if(user.password === password){
          res.json("Successful!");
        } else {
          res.json("Incorrect Password! Try Again.");
        }
      } else {
        res.json("No Record Existed");
      }
    })
    .catch(err => res.status(500).json(err));
});

app.post('/register', (req, res) => {
  GradeCalculatorLogin.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.status(500).json(err));
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

