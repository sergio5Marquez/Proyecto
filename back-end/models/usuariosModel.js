var pool = require('./bd'); // llama a la base de datos
var md5 = require('md5');

async function usuarioAndPassword(user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';//genero una variabre qe hace una consulta a la base de datos / me aseguro que almenos me traiga un registro
        var rows = await pool.query(query, [user, md5(password)]);//se conecta a la query ,va a buscar este select y cuando le pase los parametros va a chekear
        return rows[0];
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = { usuarioAndPassword }

// todas las interacciones que tengamos con la base de datos con respecto a la tabla de usuario lo va a venir a buscar aca

//esta informacion la tenemos que conectar con el formulario, el qe se hace cargo es el controlador