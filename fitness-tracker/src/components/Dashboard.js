import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Dashboard = () => {
  const [steps, setSteps] = useState(0);
  const [goal, setGoal] = useState(10000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/dashboard', {
          params: { username: 'exampleUser' }  // Replace with actual username
        });
        setSteps(response.data.steps);
        setGoal(response.data.goal);
      } catch (error) {
        console.log('Error fetching data');
      }
    };
    fetchData();
  }, []);

  const progress = Math.min((steps / goal) * 100, 100).toFixed(1);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-info">
        <p>Daily Steps: {steps}</p>
        <p>Daily Goal: {goal}</p>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-inner"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="progress-text">
        <p>Progress: {progress}%</p>
      </div>
    </div>
  );
};

export default Dashboard;
