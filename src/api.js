// src/api.js
const mockApi = {
  post: async (url, data) => {
    console.log('Mock API called with URL:', url);
    if (url === '/api/create-checkout-session') {
      console.log('Returning mock response for /api/create-checkout-session');
      return { data: { sessionId: 'cs_test_456' } };
    }
    if (url === '/api/raffle-award') {
      if (data.userId === '456' && data.reason === 'referral') {
        return { data: { success: true, newTickets: 1 } };
      }
      throw new Error('Invalid raffle award payload');
    }
    if (url.includes('/api/create-referral')) {
      return { data: { referralCode: 'NSAT-REF-789' } };
    }
    throw new Error('Invalid endpoint');
  },
  get: async (url) => {
    if (url === '/api/top-referrers') {
      return {
        data: [
          { userId: '456', name: 'Alice Writer', referrals: 15, rank: 'Gold' },
          { userId: '789', name: 'Bob Reader', referrals: 10, rank: 'Silver' },
          { userId: '101', name: 'Charlie Poet', referrals: 8, rank: 'Bronze' },
          { userId: '102', name: 'Diana Novelist', referrals: 6, rank: null }
        ]
      };
    }
    if (url.includes('/api/raffle-tickets')) {
      return { data: { tickets: 3 } };
    }
    throw new Error('Invalid endpoint');
  }
};

export default mockApi;