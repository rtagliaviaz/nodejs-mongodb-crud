const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const movieRouter = require('./routes/MovieRoutes.js');

//Initializations
const app = express();
require('./database.js');


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs')
app.use(express.json());


//middleware
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));

//routes
app.use(require('./routes/index'));
app.use(movieRouter);

//static files
app.use(express.static (path.join(__dirname, 'public')));

//listen server
app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}!`);
});