var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var gameRouter = require('./routes/game');
var queryRouter = require('./routes/query');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Development only - don't do in production
// Run this to create the table in the database
if (process.env.NODE_ENV === "development") {
  const database = new Database(config);
  try {
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
      console.log("Table created");
  } catch (err) {
    if (err !== undefined) {
      console.error(`Error creating table: ${err}`);      
    }
  }

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

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/games', gameRouter);
app.use('/query', queryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
