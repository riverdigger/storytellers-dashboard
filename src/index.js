import express from "express";
import { config } from "./database/config.js";
import Database from "./database/database.js";

// Import App routes
import home from "./api/services/home.js";
import game from "./api/services/game.js";
import openapi from "./api/openapi.js";

const port = process.env.PORT || 3000;

const app = express();

// Development only - don't do in production
// Run this to create the table in the database
if (process.env.NODE_ENV === "development") {
  const database = new Database(config);
  database
    .executeQuery(
      `CREATE TABLE Game (
        id int NOT NULL IDENTITY,
        title varchar(255),
        description varchar(255),
        active bit,
        hidden bit,
        system varchar(255),
        gm_id int,
        image_url varchar(255),
        max_players int,
        schedule varchar(255),
        timezone datetimeoffset,
        createdAt datetime,
        updatedAt datetime,
      );`
    )
    .then(() => {
      console.log("Table created");
    })
    .catch((err) => {
      // Table may already exist
      console.error(`Error creating table: ${err}`);
    });

    // database
    // .executeQuery(
    //   `CREATE TABLE Request (
    //     id int NOT NULL IDENTITY,
    //     user_id int,
    //     game_id int,
    //     timezone datetimeoffset,
    //     createdAt datetime,
    //   );`
    // )
    // .then(() => {
    //   console.log("Table created");
    // })
    // .catch((err) => {
    //   // Table may already exist
    //   console.error(`Error creating table: ${err}`);
    // });
}

// Connect App routes
app.use(express.static('src'));
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", openapi);
app.use("/games", game);
app.use("/", home);
app.use("*", (_, res) => {
  res.redirect("/");
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
