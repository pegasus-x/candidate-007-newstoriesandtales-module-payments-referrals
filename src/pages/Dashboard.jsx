// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PaymentButton from '../components/PaymentButton';
import ReferralButton from '../components/ReferralButton';

const Dashboard = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [hasStoryPack, setHasStoryPack] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const payment = query.get('payment');
    if (payment === 'success') {
      setPaymentStatus('Payment successful! Story Pack unlocked.');
      setHasStoryPack(true);
    } else if (payment === 'failed') {
      setPaymentStatus('Payment failed. Please try again.');
    }

    if (payment) {
      setTimeout(() => {
        setPaymentStatus(null);
        window.history.replaceState({}, document.title, '/');
      }, 5000);
    }
  }, [location]);

  return (
    <main className="main-content">
      <h2 className="section-title">Creator Dashboard</h2>

      {/* Payment Confirmation Message */}
      {paymentStatus && (
        <div className="payment-message">
          <p>{paymentStatus}</p>
        </div>
      )}

      {/* Story Pack Section */}
      <section className="story-pack">
        <h3 className="story-pack-title">
          <span className="icon">🛒</span> Story Pack Bundle
        </h3>
        <p className="story-pack-description">
          Get access to premium stories and exclusive content for just €5.00
        </p>
        <ul className="story-pack-list">
          <li>5 Premium Short Stories</li>
          <li>Early access to new releases</li>
          <li>Author commentary & behind-the-scenes</li>
        </ul>
        {hasStoryPack ? (
          <p className="unlocked-message">🎉 Story Pack Unlocked! Enjoy your premium content.</p>
        ) : (
          <PaymentButton />
        )}
      </section>

      {/* Invite Friends Section */}
      <section className="invite-friends">
        <h3 className="invite-friends-title">
          <span className="icon">🎁</span> Invite Friends
        </h3>
        <p className="invite-friends-description">
          Share NewStoriesAndTales with friends and earn raffle tickets for prizes!
        </p>
        <ReferralButton />
      </section>

      {/* Link to Spotlight Page */}
      <section className="spotlight-link">
        <Link to="/spotlight" className="btn-spotlight">
          <span className="icon">⭐</span> View Influencer Spotlight
        </Link>
      </section>
    </main>
  );
};

export default Dashboard;