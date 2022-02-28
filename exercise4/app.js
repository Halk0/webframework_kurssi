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
var newProductRouter = require('./routes/newproduct');
var purchaseRouter = require('./routes/purchase');
var invoiceRouter = require('./routes/invoice');
var invoicesRouter = require('./routes/invoices');
var delinvoiceRouter = require('./routes/delinvoice');

fs = require('fs');
var app = express();

console.log(__dirname)
var curState = fs.readFileSync(path.normalize(__dirname + '/state.json'), 'utf-8', function (err, data) {
  return JSON.parse(data.toString());
});

var addUsers = express.Router();
addUsers.post('/', function (req, res, next) {
  var usersDict = {}
  fs.readFileSync('./state.json', 'utf-8', function (data, err) {
    if (err) {
      console.log(err);
      res.sendStatus(500)
    }
    Accounts = JSON.parse(data.toString())
    for (account = 0; account < Accounts.accounts; account++) {
      usersDict[Accounts.accounts[account].UserName] = Accounts.accounts[account].Password
    }
    console.log(usersDict);
  })
  app.use(basicAuth({ users: usersDict }))
  res.sendStatus(200);
  return;
})

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
app.use('/index', indexRouter);
app.use('/products', productsRouter);
app.use('/product', productRouter);
app.use('/register', registerRouter, addUsers);
app.use('/search', searchRouter);
app.use('/newproduct', newProductRouter)

app.use(basicAuth({ users: { "adm": "adm" } }))
app.use('/edit', editRouter);
app.use('/purchase', purchaseRouter);
app.use('/invoices', invoicesRouter);
app.use('/invoice', invoiceRouter);
app.use('/delinvoice', delinvoiceRouter)

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
