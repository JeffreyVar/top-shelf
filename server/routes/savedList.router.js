const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


// GET

router.get('/', rejectUnauthenticated, (req, res) => {
  //console.log("In GET request");
  let userId = req.user.id
  let queryText = 'SELECT * FROM saved_cocktails WHERE user_id = $1 ORDER BY cocktail_name, cocktail_name ASC;';
  pool.query(queryText, [userId]).then((result) => {
      res.send(result.rows);
  }).catch((err) => {
      console.log(err);
      res.sendStatus(500);
  })
});

// POST from API

router.post('/', rejectUnauthenticated, (req, res) => {
  const { userId, item } = req.body;
  console.log(item);
  const sqlText = `
  INSERT INTO saved_cocktails (user_id, cocktail_name, image, instructions, ingredient1, measure1, ingredient2, measure2, ingredient3, measure3, ingredient4, measure4, ingredient5, measure5, ingredient6, measure6, ingredient7, measure7, ingredient8, measure8, ingredient9, measure9, ingredient10, measure10, ingredient11, measure11, ingredient12, measure12)
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)
  RETURNING *;
`;
  const values = [
    userId, 
    item.strDrink,
    item.strDrinkThumb,    
    item.strInstructions,    
    item.strIngredient1,      
    item.strMeasure1,        
    item.strIngredient2,
    item.strMeasure2,
    item.strIngredient3,
    item.strMeasure3,
    item.strIngredient4,
    item.strMeasure4,
    item.strIngredient5,
    item.strMeasure5,
    item.strIngredient6,
    item.strMeasure6,
    item.strIngredient7,
    item.strMeasure7,
    item.strIngredient8,
    item.strMeasure8,
    item.strIngredient9,
    item.strMeasure9,
    item.strIngredient10,
    item.strMeasure10,
    item.strIngredient11,
    item.strMeasure11,
    item.strIngredient12,      
    item.strMeasure12
  ];

  pool.query(sqlText, values)
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((error) => {
          console.error('Error saving cocktail:', error);
          res.sendStatus(500);
      });
});

// POST from user




module.exports = router;