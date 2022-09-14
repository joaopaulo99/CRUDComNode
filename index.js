//config init
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//forma de ler JSON / middleswares
app.use(
    express.urlencoded({
    extended: true,
}),
)

app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota init / endpoint
app.get('/', (req, res) => {

    // mostrar req

    res.json({message: 'oi express!' })
})


//entregar uma porta

//para evitar erro de caracter em senha ou em nome de usuario
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.uochlqm.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
.then(() => {
    console.log('conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))