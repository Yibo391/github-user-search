const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  githubId: {
    type: Number,
    required: true,
    unique: true,
  },
  login: String,
  name: String,
  avatar_url: String,
  html_url: String,
  followers: Number,
  following: Number,
  public_repos: Number,
  created_at: Date,
  searched_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
