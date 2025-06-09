// src/components/ReferralButton.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api';

const ReferralButton = () => {
  const [referralLink, setReferralLink] = useState('');
  const [tickets, setTickets] = useState(0); // Track raffle tickets
  const userId = '123';
  const navigate = useNavigate();

  const handleGenerateReferral = async () => {
    try {
      const response = await axios.post(`/api/create-referral?userId=${userId}`);
      const { referralCode } = response.data;
      const link = `https://newstoriesandtales.com?ref=${referralCode}`;
      setReferralLink(link);

      // Fetch updated raffle tickets after generating a link
      const raffleResponse = await axios.get(`/api/raffle-tickets?userId=${userId}`);
      setTickets(raffleResponse.data.tickets);
    } catch (error) {
      console.error('Error generating referral link:', error);
    }
  };

  const handleSimulateSignup = () => {
    navigate('/referral?ref=NSAT-REF-789');
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent('Discover amazing stories on NewStoriesAndTales! Join using my referral link and earn raffle tickets: ');
    const url = encodeURIComponent(referralLink);
    window.open(`https://twitter.com/intent/tweet?text=${text}${url}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`Discover amazing stories on NewStoriesAndTales! Join using my referral link and earn raffle tickets: ${referralLink}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const shareViaEmail = () => {
    const subject = encodeURIComponent('Join NewStoriesAndTales and Earn Raffle Tickets!');
    const body = encodeURIComponent(`Hi there,\n\nI found an amazing platform for stories called NewStoriesAndTales! Use my referral link to join and earn raffle tickets: ${referralLink}\n\nHappy reading!`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  return (
    <div>
      <button className="btn-referral" onClick={handleGenerateReferral}>
        <span className="icon">👥</span> Generate Referral Link
      </button>
      <button className="btn-simulate" onClick={handleSimulateSignup}>
        <span className="icon">🎮</span> Simulate Friend Signup (DEMO)
      </button>
      {referralLink && (
        <div className="referral-share">
          <p>Share to earn raffle tickets: <a href={referralLink}>{referralLink}</a></p>
          <div className="share-buttons">
            <button className="btn-share btn-twitter" onClick={shareOnTwitter}>
              <span className="icon">🐦</span> Share on X
            </button>
            <button className="btn-share btn-whatsapp" onClick={shareOnWhatsApp}>
              <span className="icon">📱</span> Share on WhatsApp
            </button>
            <button className="btn-share btn-email" onClick={shareViaEmail}>
              <span className="icon">📧</span> Share via Email
            </button>
          </div>
          {tickets > 0 && (
            <p className="raffle-tickets">You have {tickets} raffle ticket(s)!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ReferralButton;