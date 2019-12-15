const express = require('express');
const movieRouter = require('./routes/MovieRoutes.js');

//Initializations
const app = express();
require('./database.js');


//settings
app.set('port', 3000);
app.use(express.json());

//routes
app.use(movieRouter);

//listen server
app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}!`);
});