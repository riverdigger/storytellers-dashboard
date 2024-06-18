var express = require('express');
var router = express.Router();
var config = require('../database/config.js');
var Database = require('../database/database.js');

// const router = express.Router();
router.use(express.json());

// Development only - don't do in production
console.log(config);

// Create database object
const database = new Database(config);

router.post('/', async (req, res) => {
  try {
    // Return a list of games
    const games = await database.query(req.body);
    console.log(`games: ${JSON.stringify(games)}`);
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

module.exports = router;