#  Point Rally Leaderboard — Full Stack Web App

A complete full-stack **leaderboard system** where users can claim random points, view real-time rankings, and track history — built as part of a company internship task.

---

##  Project Overview

This project simulates a point-based competition system with dynamic leaderboard rankings. Users can:
- Select a name from a dropdown
- Claim random points between 1–10
- View live rankings and ranks
- Add new users
- See top performers
- Check total users, claims, and leading scores
- Review claim history with pagination

✅ Fully functional  
✅ Clean, modern UI  
✅ Responsive layout  
✅ MongoDB for data persistence  
✅ Built with best practices

---

##  Tech Stack

###  Frontend
- ReactJS (via Vite)
- Tailwind CSS
- Context API (for state management)
- Axios (API calls)

###  Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv (env variables)
- CORS enabled API

---

##  Key Features

-  **Claim Points**: Random (1–10) point generation
-  **User Management**: Add new users dynamically
-  **Live Leaderboard**: Auto-sorted by total points
-  **Top Performers**: Podium-style display
-  **Claim History**: Fully tracked with pagination
-  **Stats Overview**: Total users, claims, top score
-  **Clean UI**: Gradient + Glassmorphism effect
-  **Responsive Design**: Works on all screen sizes
-  **Reusable Components**: Modular structure

---

##  Project Structure
leaderboard-project/
├── frontend/ # React + Tailwind app
│ ├── src/
│ │ ├── components/ # UI Components (Toast, StatsCard, etc.)
│ │ ├── context/ # Global state (LeaderboardContext)
│ │ └── App.jsx
│ └── ...
├── backend/ # Express + MongoDB API
│ ├── models/ # User & ClaimHistory schemas
│ ├── routes/ # API routes
│ └── server.js
├── .env.example # Sample environment config
├── README.md # ← You're reading it
└── INSTRUCTIONS.txt # Optional short startup guide



---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Project

```bash
git clone https://github.com/yourname/leaderboard-project
cd leaderboard-project


cd backend
npm install

# Create .env file
cp .env.example .env

# Inside .env file
MONGODB_URI=your_mongodb_connection_string
PORT=4000

npm run dev
Backend will run at http://localhost:4000



cd ../frontend
npm install
npm run dev
Frontend will run at http://localhost:5173


MongoDB Collections
1. Users Collection
{
  "_id": "ObjectId",
  "name": "Sujoy",
  "totalPoints": 42
}
2. ClaimHistory Collection
{
  "_id": "ObjectId",
  "userId": "ObjectId",
  "pointsClaimed": 7,
  "claimedAt": "2025-07-14T12:00:00Z"
}


 Interviewer Notes
This project satisfies all the task requirements given by the company

Clean file structure and reusable component design

Uses Context API instead of Redux for simplicity

Claim History is paginated for better scalability

Code follows modern React and Node.js best practices


👨‍💻 Developer
Sujoy Sarkar
🌐 GitHub: sujoy1610
📧 Email: srkarsujoy715@gmail.com

