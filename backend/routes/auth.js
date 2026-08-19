const express = require('express');
const router = express.Router();

// Register Route
router.post('/register', async (req, res) => {
  try {
    // Add registration logic
    res.status(200).json({ message: "Registration route working" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  try {
    // Add login logic
    res.status(200).json({ message: "Login route working" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
