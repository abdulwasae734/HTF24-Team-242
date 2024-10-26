import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const SetGoal = () => {
  const [goal, setGoal] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/set-goal', {
        goal: parseInt(goal),
      });
      alert(response.data.message);
      setGoal('');
    } catch (error) {
      alert('Failed to set goal. Please try again.');
    }
  };

  return (
    <div>
      <h2>Set Goal</h2>
      <form onSubmit={handleSubmit}>
        <label>Daily Step Goal:</label>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          required
        />
        <br />
        <button type="submit">Set Goal</button>
      </form>
    </div>
  );
};

export default SetGoal;
