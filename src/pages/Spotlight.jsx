// src/pages/Spotlight.jsx
import React, { useEffect, useState } from 'react';
import InfluencerCard from '../components/InfluencerCard';
import axios from '../api';

const Spotlight = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const fetchReferrers = async () => {
      try {
        const response = await axios.get('/api/top-referrers');
        setInfluencers(response.data);
      } catch (error) {
        console.error('Error fetching referrers:', error);
      }
    };
    fetchReferrers();
  }, []);

  return (
    <main className="main-content">
      <h2 className="section-title">Influencer Spotlight</h2>
      <section className="spotlight">
        <p className="spotlight-description">
          Celebrating our top community champions who help grow the NewStoriesAndTales family!
        </p>
        {influencers.map((influencer) => (
          <InfluencerCard key={influencer.userId} {...influencer} />
        ))}
      </section>
    </main>
  );
};

export default Spotlight;