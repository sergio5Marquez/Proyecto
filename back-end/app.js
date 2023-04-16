var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); //al app le digo que trabajo con la configuracion / tambien le digo que este proyecto va a trabajar con variavres de enterno
var session = require('express-session');//trabajo con variabres de seccion

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');//yo qui
var adminRouter = require('./routes/admin/novedades');// generamos la nueva pagina

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ //se avilita la variabre de seccion
  secret: 'PW2021awqyeudj',
  cookie: {maxAge: null},
  resave: false,
  saveUninitialized: true
}))

secured = async (req, res, next) => { //chekea la seguridad,controlar qe si o si tenemos qe estar logiados para pasar ala pagina siguiente
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next(); //si tengo el id de la base de datos ,entonces da siguiente
    } else {
      res.redirect('/admin/login'); // sino redireccioname al login
    }
  } catch (error) {
    console.log(error)
  }
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);//yo aqui
app.use('/admin/novedades', secured, adminRouter); //habilitar ,(secured) variabre que chekea la seguridad

//si el codigo esta de 53 linea  para avajo ,no va a funcionar 
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
