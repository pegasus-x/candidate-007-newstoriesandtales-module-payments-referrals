// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Spotlight from './pages/Spotlight';
import PaymentStatus from './pages/PaymentStatus';
import ReferralHandler from './pages/ReferralHandler';

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <header className="header">
          <div>
            <h1 className="header-logo">NewStoriesAndTales</h1>
            <p className="header-tagline">Where every story finds its voice</p>
          </div>
          <div className="header-user">
            Welcome, Demo User <span className="crown">👑</span>
          </div>
        </header>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/spotlight" element={<Spotlight />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
          <Route path="/referral" element={<ReferralHandler />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-logo">NewStoriesAndTales.com</div>
          <p className="footer-tagline">
            A narrative-driven platform for creative expression, engagement, and discovery
          </p>
          <p className="footer-attribution">Technical Assessment - Alatree Ventures</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;