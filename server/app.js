const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const carouselinfoRouter = require('./routes/carouselinfo');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const authenticateRouter = require('./routes/authenticate');
const checkProfileRouter = require('./routes/checkProfile');
const getProfileRouter = require('./routes/getProfile');
const updateProfileRouter = require('./routes/updateProfile');


const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, HEAD");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, authorization");
  next();
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/getCarouselInfo', carouselinfoRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/authenticate',authenticateRouter);
app.use('/checkProfile',checkProfileRouter);
app.use('/getProfile',getProfileRouter);
app.use('/updateProfile',updateProfileRouter);

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
  // res.render('error');
});

module.exports = app;
