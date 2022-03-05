const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  // Add query to get all genres
  const query = `SELECT genres.name FROM "movies"
  JOIN movies_genres ON movies.id = movies_genres.movie_id
  JOIN genres ON genres.id = movies_genres.genre_id
  WHERE movies.id = $1;`;

  const queryInsert = req.params.id;
  console.log("This is req.params", req.params.id);

  pool
    .query(query, [queryInsert])
    .then((result) => {
      console.log("Response is", result);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error on get", err);
      res.sendStatus(500);
    });

  
});

module.exports = router;
