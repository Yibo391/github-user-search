const express = require('express');
const router = express.Router();
const { searchUser } = require('../controllers/userController');

// Route to search for a GitHub user
router.get('/:username', searchUser);

module.exports = router;
