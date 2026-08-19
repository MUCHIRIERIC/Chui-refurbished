const express = require('express');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    res.status(200).json({ message: "Products route active" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
