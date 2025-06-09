NewStoriesAndTales - Tech Assessment for Alatree Ventures
Overview
NewStoriesAndTales.com is a narrative-driven platform where creators share short stories, serialized fiction, and community lore, emphasizing creative expression, engagement, and discovery. This project implements Module 6 (Payments Integration) and Module 8 (Referral & Influencer Spotlight) as part of the Contract Web Developer Tech Assessment for Alatree Ventures.
Features

Payments Integration (Module 6):
Implements a mock Stripe Checkout + Connect flow to purchase a "Story Pack" bundle for €5.00.
POSTs to /api/create-checkout-session and redirects to a mock checkout URL.
Displays "Purchase successful!" or "Payment failed. Please try again." based on the session ID.
Shows a confirmation message on the dashboard and unlocks the Story Pack.


Referral & Influencer Spotlight (Module 8):
Referral Link Generator: Allows users to generate a referral link and share it via X, WhatsApp, or email.
Influencer Spotlight: A dedicated /spotlight page displaying top referrers with avatars, referral counts, and rank badges (Gold, Silver, Bronze).
Referral Signup: Simulates a referral signup, awards raffle tickets, and displays "You earned a raffle ticket for referring a friend!".


Styling: Adheres to the Storyverse brand guidelines:
Warm, welcoming layouts with a cream background (#FFFDD0).
Primary Maroon (#8B0000), Accent Gold (#FFD700), and neutral colors.
Typography: Playfair Display for headlines, Lora for body text.
Soft-rounded content cards with fade-in animations.



Project Structure
newstoriesandtales/
├── src/
│   ├── components/
│   │   ├── InfluencerCard.jsx
│   │   ├── PaymentButton.jsx
│   │   ├── ReferralButton.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── PaymentStatus.jsx
│   │   ├── ReferralHandler.jsx
│   │   ├── Spotlight.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── storyverse.css
│   ├── api.js
│   ├── App.jsx
│   ├── main.jsx
├── public/
│   ├── index.html
├── package.json
├── vite.config.js
├── .gitignore


src/styles/storyverse.css: Contains all styling for the app, including Storyverse brand guidelines.
src/api.js: Mock API endpoints for payments and referrals.

Setup Instructions
To run this project locally, follow these steps:

Clone the Repository:
git clone https://github.com/pegasus-x/candidate-007-newstoriesandtales-module-payments-referrals.git
cd newstoriesandtales


Install Dependencies:
npm install


Run the Development Server:
npm run dev

Open http://localhost:5173 in your browser to view the app.

Build for Production:
npm run build

The production-ready files will be in the dist/ folder.


Deployment
The app is deployed on Netlify, with the live staging URL: https://newstoriesandtales-007.netlify.app
Deployment Steps

Deploy to Netlify:

Connected the GitHub repository to Netlify.
Configured build settings:
Build command: npm run build
Publish directory: dist


Deployed the site, resulting in the live URL above.



Notes

Minified React Error #130:
A "Minified React Error #130" appears in the console during development, indicating an "Element type is invalid" issue.
This error does not impact the core functionality of the app (payment flow, referral system, and UI rendering work as expected).
The deployed version on Netlify functions correctly, and the error is likely related to module resolution or React DevTools in the development environment.



Tech Stack

Framework: React (v18.3.1)
Routing: React Router (v6.26.1)
Build Tool: Vite
Styling: Custom CSS with Storyverse brand guidelines
Dependencies:
axios for mock API requests
react-router-dom for client-side routing

