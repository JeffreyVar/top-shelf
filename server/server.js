const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const axios = require('axios');

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes, will add more here
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */ /* More routes will be added here */
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

const cocktail_prodution_key = "1";

// app.post('/search', (req, res) => {
//   const searchCriteria = req.body.search; 
//   axios.get(`https:www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchCriteria}`)
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((error) => {
//       console.log('GET results failed', error);
//       res.sendStatus(500);
//     });
// });

app.post('/search_by_name', async (req, res) => {
  const searchCriteria = req.body.search;
  try {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchCriteria}`);
   // console.log(response.data);
    res.send(response.data);
  } catch (error) {
    console.log('GET results failed', error);
    res.sendStatus(500);
  }
});

// app.post('/search_by_ingredient', async (req, res) => {
//   const searchCriteria = req.body.search; 
//   try {
//     const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${searchCriteria}`);
//     res.send(response.data);
//   } catch (error) {
//     console.log('GET results failed', error);
//     res.sendStatus(500);
//   }
// });
