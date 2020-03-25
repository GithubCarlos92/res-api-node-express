const {
    Router
} = require('express')
const router = Router()
const express = require('express')

//le decimos que usaremos el formato json
router.use(express.json())

//ruta con la funcion send
router.get('/mensaje', (req, res) => {
    res.send('hola desde el servidor')

})

//ruta con la funcion json
router.get('/', (req, res) => {
    res.json({
        "title": "Hi People"
    })
})

//ruta para obtener las peliculas
router.get('/datos', (req, res) => {
    const data = {
        "id": "1",
        "dni": "47133365",
        "nombres": " carlos valverde",
    }
    res.json(data)
})

//exportamos 
module.exports = router