const express = require('express');
const router = express.Router();
const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

// ➕ Add a new user
router.post('/add', async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.create({ name });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📥 Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 🎯 Claim points
router.post('/claim/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const randomPoints = Math.floor(Math.random() * 10) + 1;

    user.totalPoints += randomPoints;
    await user.save();

    const history = await ClaimHistory.create({
      userId: user._id,
      pointsClaimed: randomPoints
    });

    res.json({ user, pointsClaimed: randomPoints });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🏆 Leaderboard
router.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const leaderboard = users.map((u, i) => ({
    id: u._id,
    name: u.name,
    points: u.totalPoints,
    rank: i + 1
  }));
  res.json(leaderboard);
});

// 📜 Claim history
router.get('/history', async (req, res) => {
  const history = await ClaimHistory.find().populate('userId').sort({ claimedAt: -1 });
  res.json(history);
});

module.exports = router;
