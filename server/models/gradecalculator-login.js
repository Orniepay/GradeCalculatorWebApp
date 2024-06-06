const mongoose = require('mongoose');

const gradeCalculatorLoginSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const GradeCalculatorLogin = mongoose.model('GradeCalculatorLogin', gradeCalculatorLoginSchema);

module.exports = GradeCalculatorLogin;
