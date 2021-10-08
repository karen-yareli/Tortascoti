const express = require('express')
const routerApi = require('./routes')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
  res.send('Bienvenido a mi app de comida')
})

app.get('/otra-ruta', (req, res) =>{
  res.send('Espero te guste mi app')
})

app.get('/menu', (req, res) =>{
  res.send('saludos')
})

routerApi(app)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
