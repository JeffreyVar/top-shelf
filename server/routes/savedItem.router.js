const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

// GET

// router.get('/:drinkId', rejectUnauthenticated, (req, res) => {
//     console.log("In ITEM GET request");
//     let drinkId = req.params.drinkId;
//     let queryText = 'SELECT * FROM saved_cocktails WHERE id = $1';
//     pool.query(queryText, [drinkId]).then((result) => {
//         res.send(result.rows[0]);
//     }).catch((err) => {
//         console.log(err);
//         res.sendStatus(500);
//     })
//   });

// GET
router.get('/:drinkId', rejectUnauthenticated, (req, res) => {
    console.log("In ITEM GET request");
    const drinkId = req.params.drinkId;
    let queryText = 'SELECT * FROM saved_cocktails WHERE id = $1';
    pool.query(queryText, [drinkId]).then((result) => {
        res.send(result.rows[0]);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});


  module.exports = router;