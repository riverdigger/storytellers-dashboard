import express from "express";
import { config } from "../../database/config.js";
import Database from "../../database/database.js";

const router = express.Router();
router.use(express.json());

// Development only - don't do in production
console.log(config);

// Create database object
const database = new Database(config);

router.get("/", (_, res) => {
  res.status(200).send("Games API");
});

// Games
router.get("/api/games", async (_, res) => {
  try {
    // Return a list of games
    const games = await database.readAll();
    console.log(`games: ${JSON.stringify(games)}`);
    res.status(200).json(games);
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.post("/api/game", async (req, res) => {
  try {
    // Create a game
    const game = req.body;
    console.log(`game: ${JSON.stringify(game)}`);
    const rowsAffected = await database.create(game);
    res.status(201).json({ rowsAffected });
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.get("/api/games/:id", async (req, res) => {
  try {
    // Get the game with the specified ID
    const gameId = req.params.id;
    console.log(`gameId: ${gameId}`);
    if (gameId) {
      const result = await database.read(gameId);
      console.log(`games: ${JSON.stringify(result)}`);
      res.status(200).json(result);
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.put("/api/games/:id", async (req, res) => {
  try {
    // Update the game with the specified ID
    const gameId = req.params.id;
    console.log(`gameId: ${gameId}`);
    const game = req.body;

    if (gameId && game) {
      delete game.id;
      console.log(`game: ${JSON.stringify(game)}`);
      const rowsAffected = await database.update(gameId, game);
      res.status(200).json({ rowsAffected });
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

router.delete("/api/games/:id", async (req, res) => {
  try {
    // Delete the game with the specified ID
    const gameId = req.params.id;
    console.log(`gameId: ${gameId}`);

    if (!gameId) {
      res.status(404);
    } else {
      const rowsAffected = await database.delete(gameId);
      res.status(204).json({ rowsAffected });
    }
  } catch (err) {
    res.status(500).json({ error: err?.message });
  }
});

export default router;
