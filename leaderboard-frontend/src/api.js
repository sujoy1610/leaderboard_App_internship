import axios from 'axios';

const API = axios.create({
  baseURL: 'https://leaderboard-app-internship-leaderboard.onrender.com',
});

export default API;
