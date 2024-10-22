const axios = require('axios');
const User = require('../models/User');

// Function to fetch user data from GitHub API
const fetchGitHubUser = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      'Accept': 'application/vnd.github.v3+json',
      // If you have a GitHub token, uncomment and add it here to increase rate limits
      // 'Authorization': `token YOUR_GITHUB_TOKEN`
    },
  });
  return response.data;
};

// @desc    Search GitHub user
// @route   GET /api/users/:username
// @access  Public
exports.searchUser = async (req, res) => {
  const { username } = req.params;

  try {
    // Check if user exists in the database
    let user = await User.findOne({ login: username });

    if (user) {
      // Update the searched_at timestamp
      user.searched_at = Date.now();
      await user.save();
      return res.json(user);
    }

    // If not in DB, fetch from GitHub API
    const githubData = await fetchGitHubUser(username);

    // Create a new user in the database
    user = new User({
      githubId: githubData.id,
      login: githubData.login,
      name: githubData.name,
      avatar_url: githubData.avatar_url,
      html_url: githubData.html_url,
      followers: githubData.followers,
      following: githubData.following,
      public_repos: githubData.public_repos,
      created_at: githubData.created_at,
    });

    await user.save();

    res.json(user);
  } catch (error) {
    if (error.response && error.response.status === 404) {
      res.status(404).json({ message: 'User not found' });
    } else {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
};
