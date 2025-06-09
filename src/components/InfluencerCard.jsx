import React from 'react';

const InfluencerCard = ({ name, referrals, rank }) => {
  const initial = name[0].toUpperCase();

  return (
    <div className="influencer-card">
      <div className="influencer-avatar">{initial}</div>
      <div className="influencer-info">
        <div className="influencer-name">{name}</div>
        <div className="influencer-referrals">
          <span className="icon">👥</span> {referrals} referrals
          {rank && (
            <span className={`rank-badge ${rank.toLowerCase()}`}>{rank}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfluencerCard;