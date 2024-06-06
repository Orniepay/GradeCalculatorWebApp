const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Ensure routes are imported

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/gradecalculator-login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Register routes here after the middleware setup
app.use('/api', authRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
