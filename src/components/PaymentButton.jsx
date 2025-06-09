import React, { useState } from 'react';
import axios from '../api';

const PaymentButton = () => {
  const [message, setMessage] = useState('');

  const handlePurchase = async () => {
    console.log('Starting payment process...');
    try {
      console.log('Making POST request to /api/create-checkout-session...');
      const response = await axios.post('/api/create-checkout-session', {
        product: 'Story Pack',
        amount_cents: 500,
        currency: 'EUR',
        split: { author: 400, platform: 100 }
      });
      console.log('Response received:', response.data);
      const { sessionId } = response.data;
      console.log('Session ID:', sessionId);
      console.log('Redirecting to:', `https://checkout.stripe.com/pay/${sessionId}`);

      setTimeout(() => {
        window.location.href = `/payment-status?sessionId=${sessionId}`;
      }, 500);
    } catch (error) {
      console.error('Payment error:', error);
      setMessage(`Error initiating payment: ${error.message}`);
    }
  };

  return (
    <div>
      <button className="btn-buy" onClick={handlePurchase}>
        <span className="icon">🛒</span> Buy Story Pack - €5.00
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PaymentButton;