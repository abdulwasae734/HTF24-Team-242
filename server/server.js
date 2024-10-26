const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/fitness-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


const User = require('./models/User');

// Register Route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add Steps Route
app.post('/add-steps', async (req, res) => {
    const { username, steps } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      user.steps += steps;
      await user.save();
      res.json({ message: 'Steps added successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  // Set Goal Route
  app.post('/set-goal', async (req, res) => {
    const { username, goal } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      user.goal = goal;
      await user.save();
      res.json({ message: 'Goal set successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
// Dashboard Route
app.get('/dashboard', async (req, res) => {
    const { username } = req.query;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ message: 'User not found' });
      }
      res.json({ steps: user.steps, goal: user.goal });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  