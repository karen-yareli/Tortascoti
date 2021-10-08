const menuRouters = require('./menu')
//const clientesRouters = require('./clientes')


function routerApi(app){
  app.use('/menu', menuRouters)

}

module.exports = routerApi
