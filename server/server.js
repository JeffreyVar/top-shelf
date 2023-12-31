const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const axios = require('axios');

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes, will add more here
const userRouter = require('./routes/user.router');
const savedListRouter = require('./routes/savedList.router');
const savedItemRouter = require('./routes/savedItem.router');

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
app.use('/api/saved_cocktails', savedListRouter);
app.use('/api/saved_cocktails', savedItemRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5001;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

const apiKey = process.env.COCKTAIL_API_KEY;

app.post('/search_by_name/:search', async (req, res) => {
  const searchCriteria = req.params.search;
  try {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/search.php?s=${searchCriteria}`);
    res.send(response.data);
  } catch (error) {
    console.log('GET results failed', error);
    res.sendStatus(500);
  }
});

app.post('/search_by_ingredient/:search', async (req, res) => {
  const searchCriteria = req.params.search; 
  try {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/filter.php?i=${searchCriteria}`);
    res.send(response.data);
  } catch (error) {
    console.log('GET results failed', error);
    res.sendStatus(500);
  }
});

app.post('/api/cocktails/:cocktailId', async (req, res) => {
  const cocktailId = req.params.cocktailId;
  try {
    const response = await axios.get(`https://www.thecocktaildb.com/api/json/v2/${apiKey}/lookup.php?i=${cocktailId}`);
    res.send(response.data);
  } catch (error) {
    console.log('Error fetching cocktail details from the API', error);
    res.sendStatus(500);
  }
});