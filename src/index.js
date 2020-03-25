//requerimos expres y morgan
const express = require('express')
const app = express()
const morgan = require('morgan')

//asignamos una variable que contendra el puerto 
app.set('port', process.env.PORT || 3000)


//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: false
}))

//importamos las rutas de api
app.use('/api', require('./routers/router'))
app.use('/api', require('./routers/peliculas'))


//puerto
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})

//V.C.C.I