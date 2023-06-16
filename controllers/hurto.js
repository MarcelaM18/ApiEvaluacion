//Importar paquetes requeridos de Node
const {response} = require('express')

//Importación de los modelos
const Hurto = require('../models/hurto')

//Consultar
const hurtoGet = async(req, res = response) =>{
    const {direccion} = req.query //Desestructuración

    //Consultar todos los hurtos
    const hurtos = await Hurto.find()
    /*.find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
*/
    res.json({
        hurtos
    })   
}

//Registrar
const hurtoPost = async(req, res = response) => {
    const body = req.body //Captura de atributos
    let mensaje = ''
    
    console.log(body)
    try {
        const hurto = new Hurto(body) //Instanciar el objeto   
        await hurto.save()
        mensaje = 'El registro se realizó exitosamente'
    } catch (error) {
        console.log(error)
        if (error) {
            if (error.name === 'ValidationError') {
               console.error(Object.values(error.errors).map(val => val.message))
                mensaje = Object.values(error.errors).map(val => val.message)
            }
        }
        console.log(mensaje)
    }
}


//Modificar
const hurtoPut = async(req, res = response) => {

    const {direccion, latitud, longitud, descipcion } = req.body
    let mensaje = ''

    try{
        const hurto = await Hurto.findOneAndUpdate({direccion: direccion},{latitud:latitud, longitud:longitud, descipcion:descipcion})
        mensaje = 'La modificación se efectuó exitosamente'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

//Modificar
const hurtoDelete = async(req, res = response) => {

    const {_id} = req.body
    let mensaje = ''

    try{
        const hurto = await Hurto.deleteOne({_id: _id})
        mensaje = 'La eliminiación se efectuó exitosamente.'
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    hurtoGet,
    hurtoPost,
    hurtoPut,
    hurtoDelete
}

/*Crear una API con los métodos GET y POST para registrar y consultar
en una colección el número de ambiente, la fecha, hora, temperatura y 
direccion hurto

*Desplegar la API en render o el servidor de su preferencia
*/
