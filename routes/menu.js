const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json([
    {
      Categoria: 'Tortas',
    },
    {
      Especialidad: 'Cubana ',
      Precio: 35
    }
  ] )
})

router.get('/', (req, res) => {
  res.json([
    {
      Categoria: 'Papas',
    },
    {
      Especialidad: 'Francesa',
      Precio: 45
    }
  ] )
})

router.get('/filter', (req, res) => {
  res.json(
    {
      Categoria: 'Bebidas',
    },
    {
      Malteadas1L: 'Chocomilk',
      Precio: 30
    }
    )
})

router.get('/filter', (req, res) => {
  res.json(
    {
      Categoria: 'papas',
    },
    {
     especialidad  : 'francesas',
      Precio: 45
    }
    )
})

module.exports = router
