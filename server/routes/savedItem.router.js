const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

// GET

router.get('/:drinkId', rejectUnauthenticated, (req, res) => {
    const drinkId = req.params.drinkId;
    let queryText = 'SELECT * FROM saved_cocktails WHERE id = $1';
    pool.query(queryText, [drinkId])
    .then((result) => {
        res.send(result.rows[0]);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

// PUT 

router.put('/:id', rejectUnauthenticated, (req, res) => {
    Id = req.params.id;
    const editedCocktail = req.body;
    const sqlText = `
    UPDATE saved_cocktails
    SET
      cocktail_name = $2,
      image = $3,
      instructions = $4,
      ingredient1 = $5,
      measure1 = $6,
      ingredient2 = $7,
      measure2 = $8,
      ingredient3 = $9,
      measure3 = $10,
      ingredient4 = $11,
      measure4 = $12,
      ingredient5 = $13,
      measure5 = $14,
      ingredient6 = $15,
      measure6 = $16,
      ingredient7 = $17,
      measure7 = $18,
      ingredient8 = $19,
      measure8 = $20,
      ingredient9 = $21,
      measure9 = $22,
      ingredient10 = $23,
      measure10 = $24,
      ingredient11 = $25,
      measure11 = $26,
      ingredient12 = $27,
      measure12 = $28
    WHERE id = $1
    RETURNING *;
  `;

  const values = [
    editedCocktail.id,
    editedCocktail.cocktail_name,
    editedCocktail.image,
    editedCocktail.instructions,
    editedCocktail.ingredient1,
    editedCocktail.measure1,
    editedCocktail.ingredient2,
    editedCocktail.measure2,
    editedCocktail.ingredient3,
    editedCocktail.measure3,
    editedCocktail.ingredient4,
    editedCocktail.measure4,
    editedCocktail.ingredient5,
    editedCocktail.measure5,
    editedCocktail.ingredient6,
    editedCocktail.measure6,
    editedCocktail.ingredient7,
    editedCocktail.measure7,
    editedCocktail.ingredient8,
    editedCocktail.measure8,
    editedCocktail.ingredient9,
    editedCocktail.measure9,
    editedCocktail.ingredient10,
    editedCocktail.measure10,
    editedCocktail.ingredient11,
    editedCocktail.measure11,
    editedCocktail.ingredient12,
    editedCocktail.measure12,
  ];

  pool.query(sqlText, values)
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((error) => {
          console.error('Error updating cocktail:', error);
          res.sendStatus(500);
      });
});

// DELETE

router.delete('/:drinkId', rejectUnauthenticated, (req,res) => {
    const drinkId = req.params.drinkId;
    let queryText = `DELETE FROM saved_cocktails WHERE "id" = $1;`;
    pool.query(queryText, [drinkId])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(`Error making query ${queryText}`, err);
        res.sendStatus(500);
    });
  });

  module.exports = router;