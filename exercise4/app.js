var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var data = require('./state.json')

var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var productRouter = require('./routes/product');
var editRouter = require('./routes/edit');
var registerRouter = require('./routes/register');
var searchRouter = require('./routes/search');
var basicAuth = require('express-basic-auth');
var indexRouter = require('./routes/index');

fs = require('fs');
var app = express();

console.log(__dirname)
var curState = fs.readFileSync(path.normalize(__dirname + '/state.json'), 'utf-8', function (err, data) {
  return JSON.parse(data.toString());
});

console.log(curState)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', usersRouter);
app.use('/index', indexRouter)
app.use('/products', productsRouter)
app.use('/product', productRouter)
app.use('/register', registerRouter)
app.use('/search', searchRouter)

// app.use(basicAuth({ users: { "adm": "adm" } }))
app.use('/edit', editRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
