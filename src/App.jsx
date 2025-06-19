import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DonorRegistration from './components/DonorRegistration';
import BloodRequest from './components/BloodRequest';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<DonorRegistration />} />
          <Route path="/request" element={<BloodRequest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

