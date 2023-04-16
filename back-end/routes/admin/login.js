var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login',{
    layout: 'admin/layout'
  });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();//destruir la variabre de seccion id,usuario
  res.render('admin/login', { // despues mandame al login
    layout: 'admin/layout'
  });
});

router.post('/', async (req, res, next) => { //cuando resivo los datos del form a traves del post
  try {
    var usuario = req.body.usuario; //capturando la info
    var password = req.body.password; //capturando la info 

    var data = await usuariosModel.usuarioAndPassword(usuario, password);
   //genero una variabre hace el awaint para darle el cierre a la funcion async, se conecta a esta (usuariosModel) variabre qe tiene todas las funciones
   //busco la funcion y de paso lo qe se esta almacenando

    // data de vuelve las columnas id ,usuario, password
    if (data != undefined) { //si tengo un registro 
      //aca va a guardar las variabres de secciones que es el codigo qe aparece en el app.js
      req.session.id_usuario = data.id;// guardo el nombre del usuario ,podemos utilizar esa dato para qe me imprima y diga bienvenido 
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    } else { //sino aseme un render ,mandame devuelta a la pagina de login
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true //habilita un error donde podemos escribir un <p>error
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
//va hacer qe cuando comprete el formulario y prieto ese boton, voy a traves del metodo post ,empiece a procesar y ver como se conecta