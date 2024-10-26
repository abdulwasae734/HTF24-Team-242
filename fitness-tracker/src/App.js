import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import AddSteps from './components/AddSteps';
import SetGoal from './components/SetGoal';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/add-steps">Add Steps</Link>
          <Link to="/set-goal">Set Goal</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-steps" element={<AddSteps />} />
          <Route path="/set-goal" element={<SetGoal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
