const {
    Router
} = require('express')
const router = Router()
const express = require('express')
const _ = require('underscore')

const peliculas = require('../data.json')

//console.log(peliculas)

//ruta get para enviar las peliculas
router.get('/pelis', (req, res) => {
    res.json(peliculas)

})

//ruta post para enviar las peliculas
router.post('/pelis', (req, res) => {
    const datos = req.body
    if (datos != null) {
        const id = peliculas.length + 1
        const nuevaPelicula = {
            ...req.body,
            id
        }
        peliculas.push(nuevaPelicula)
        res.json(peliculas)
    } else {
        res.send('no se envio respuesta');

    }

})

//rutas put para actualizar datos de acuerdo al id
router.put('/pelis/:id', (req, res) => {
    const {
        id
    } = req.params
    const {
        titulo,
        director,
        año,
        genero,
        rating
    } = req.body

    if (titulo && director && año && genero && rating) {
        _.each(peliculas, (pelicula, i) => {
            if (pelicula.id == id) {
                pelicula.titulo = titulo,
                    pelicula.director = director,
                    pelicula.año = año,
                    pelicula.genero = genero,
                    pelicula.rating = rating
            }
        })
        res.json(peliculas)
    } else {
        res.status(500).json({
            error: 'error desde el servidor'
        })
    }
})

//rutas delete pa las peliculas 
router.delete('/pelis/:id', (req, res) => {
    const {
        id
    } = req.params
    _.each(peliculas, (pelicula, i) => {
        if (pelicula.id = id) {
            peliculas.splice(i, 1)
        }
    })
    res.send(peliculas)

})


//exportamos 
module.exports = router