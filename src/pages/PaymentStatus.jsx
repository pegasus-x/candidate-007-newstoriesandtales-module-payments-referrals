// src/pages/PaymentStatus.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentStatus = () => {
  const [status, setStatus] = useState('Processing...');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const sessionId = query.get('sessionId');
    if (sessionId === 'cs_test_456') {
      setStatus('Purchase successful!');
      // Redirect to dashboard with a success message in the query
      setTimeout(() => {
        navigate('/?payment=success');
      }, 4000);
    } else {
      setStatus('Payment failed or session invalid.');
      setTimeout(() => {
        navigate('/?payment=failed');
      }, 2000);
    }
  }, [location, navigate]);

  return (
    <main className="main-content">
      <h2 className="section-title">Payment Status</h2>
      <p>{status}</p>
    </main>
  );
};

export default PaymentStatus;