# ✨ NewStoriesAndTales – Tech Assessment for Alatree Ventures

**NewStoriesAndTales.com** is a narrative-driven platform empowering creators to share short stories, serialized fiction, and community lore. This repository implements **Module 6 (Payments Integration)** and **Module 8 (Referral & Influencer Spotlight)** as part of the **Contract Web Developer Tech Assessment** for **Alatree Ventures**.

🌐 **Live Site:** https://newstalesandstories-007.netlify.app/

---

## 🚀 Features

### 💳 Payments Integration (Module 6)
- Implements a **mock Stripe Checkout + Connect** flow.
- Purchases a "Story Pack" for **€5.00** via:
  - `POST /api/create-checkout-session`
  - Redirects to a mock Stripe URL.
- Displays:
  - ✅ **"Purchase successful!"**
  - ❌ **"Payment failed. Please try again."**
- Unlocks the **Story Pack** in the user dashboard.

### 🧑‍🤝‍🧑 Referral & Influencer Spotlight (Module 8)
- **Referral Link Generator**: Share via X (Twitter), WhatsApp, or Email.
- **Influencer Spotlight Page** `/spotlight`:
  - Shows top referrers with avatars.
  - Displays **rank badges**: 🥇 Gold, 🥈 Silver, 🥉 Bronze.
- **Referral Signup Simulation**:
  - Awards **raffle tickets**.
  - Message: _"You earned a raffle ticket for referring a friend!"_

---

## 🎨 Styling

- 🌼 **Brand Theme:**
  - Background: `#FFFDD0` (Cream)
  - Primary: `#8B0000` (Maroon)
  - Accent: `#FFD700` (Gold)
- 🖋️ **Typography:**
  - Headlines: _Playfair Display_
  - Body: _Lora_
- 💫 UI Elements:
  - Rounded content cards
  - Smooth **fade-in animations**

---

## 🧱 Project Structure

newstoriesandtales/
├── src/
│ ├── components/
│ │ ├── InfluencerCard.jsx
│ │ ├── PaymentButton.jsx
│ │ ├── ReferralButton.jsx
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ ├── PaymentStatus.jsx
│ │ ├── ReferralHandler.jsx
│ │ ├── Spotlight.jsx
│ ├── styles/
│ │ ├── global.css
│ │ ├── storyverse.css
│ ├── api.js
│ ├── App.jsx
│ ├── main.jsx
├── public/
│ ├── index.html
├── package.json
├── vite.config.js
├── .gitignore  

---

## 🛠️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/pegasus-x/candidate-007-newstoriesandtales-module-payments-referrals.git
   cd newstoriesandtales
2. **Install Dependencies**
    ``` bash
    npm install
3. **Run the App Locally**
     ``` bash
     npm run dev
4. **View on Browser**
    http://localhost:5173
5. **Build for Production**
6. npm run build 

🚀 Deployment
🟢 Deployed on Netlify
🔗https://newstalesandstories-007.netlify.app/

Deployment Steps:

Connected GitHub repo to Netlify

Build Command: npm run build

Publish Directory: dist/

Automatic deployment from main branch

🧪 Known Issues
⚠️ Minified React Error #130

Appears only in development.

Message: "Element type is invalid..."

✅ Does not affect functionality.

Likely due to dev tooling or module resolution.

✅ Deployed version functions correctly.

🧰 Tech Stack
Tool/Library	Version	Purpose
⚛️ React	18.3.1	Frontend framework
🧭 React Router	6.26.1	Client-side routing
⚡ Vite	Latest	Development/build tool
🎨 CSS	Custom	Theming with Storyverse brand
📡 Axios	Latest	API request handling
🌍 react-router-dom	Latest	Routing helpers
        
📄 License
This project is developed for a technical assessment. For educational or evaluation purposes only.

🙌 Acknowledgements
Special thanks to Alatree Ventures for the opportunity.

Brand theme inspired by the Storyverse identity.
Developed with ❤️ and React
