var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel')

/* GET home page. */
router.get('/', async function (req, res, next) {
  var novedades = await novedadesModel.getNovedades(); //nuevo
  res.render('admin/novedades', {
    layout:'admin/layout',
    usuario: req.session.nombre,//genero una persona para luego poder imprimirla dentro del hbs
    novedades //nuevo
  });
});

router.get('/agregar',(req,res,next) => {//nuevo
  res.render('admin/agregar',{
    layout: 'admin/layout'
  });
});

router.post('/agregar',async(req, res, next) => { //nuevo
  try {
    console.log(req.body)
    if (req.body.titulo != '' && req.body.subtitulo !='' && req.body.cuerpo !='') {
      await novedadesModel.insertNovedad(req.body);
      res.redirect('/admin/novedades')
     } else {
      res.render('admin/agregar',{
        layout: 'admin/layout',
        error: true,
        message: 'Todos los campos son requeridos'
      })
     }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar',{
      layout: 'admin/layout',
      error:true, 
      message: 'No se cargo la novedad'
    });
  }
});

module.exports = router;

//necesario para la creacion de una pagina o nueva pestaña

