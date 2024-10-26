const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    steps: { type: Number, default: 0 },
    goal: { type: Number, default: 10000 },  // Example default goal
  });
  

module.exports = mongoose.model('User', userSchema);
