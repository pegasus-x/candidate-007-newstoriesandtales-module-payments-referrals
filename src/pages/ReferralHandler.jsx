// src/pages/ReferralHandler.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../api';

const ReferralHandler = () => {
  const [message, setMessage] = useState('Processing referral...');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const refCode = query.get('ref');
    if (refCode === 'NSAT-REF-789') {
      axios
        .post('/api/raffle-award', { userId: '456', reason: 'referral' })
        .then((response) => {
          const { newTickets } = response.data;
          setMessage(`You earned ${newTickets > 1 ? `${newTickets} raffle tickets` : 'a raffle ticket'} for referring a friend!`);
          setTimeout(() => navigate('/'), 3000);
        })
        .catch((error) => {
          console.error('Referral error:', error);
          setMessage('Referral failed.');
        });
    } else {
      setMessage('Invalid referral code.');
    }
  }, [location, navigate]);

  return (
    <main className="main-content">
      <h2 className="section-title">Referral Handler</h2>
      <p>{message}</p>
    </main>
  );
};

export default ReferralHandler;