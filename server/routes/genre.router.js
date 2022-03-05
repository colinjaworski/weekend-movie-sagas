const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
console.log('req.params', req.params)
  const query = 
  `select "genres"."name" from "genres"
  join "movies_genres" on
  "movies_genres"."genre_id"="genres"."id"
  join "movies" on
  "movies_genres"."movie_id"="movies"."id"
  where "movies"."id" = ${req.params.id}`


  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

module.exports = router;