const express = require('express');
const router = express.Router();

// Get app settings
router.get('/', async (req, res) => {
  try {
    res.status(200).json({ message: "Settings route active" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
