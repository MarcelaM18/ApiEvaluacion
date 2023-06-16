const {Router} = require('express')

const route = Router() 

//Importar métodos del controlador
const {hurtoGet, hurtoPost, hurtoPut, hurtoDelete} = require('../controllers/hurto')

route.get('/', hurtoGet)

route.post('/', hurtoPost)

route.put('/', hurtoPut)


route.delete('/', hurtoDelete)

module.exports = route