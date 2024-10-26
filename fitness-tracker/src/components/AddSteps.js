import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';


const AddSteps = () => {
  const [steps, setSteps] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/add-steps', {
        steps: parseInt(steps),
      });
      alert(response.data.message);
      setSteps('');
    } catch (error) {
      alert('Failed to add steps. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add Steps</h2>
      <form onSubmit={handleSubmit}>
        <label>Steps:</label>
        <input
          type="number"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />
        <br />
        <button type="submit">Add Steps</button>
      </form>
    </div>
  );
};

export default AddSteps;
