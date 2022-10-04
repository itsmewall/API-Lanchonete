const express = require('express')
const routes = require('./routes/routes')

const app = express()

// BANCO DE DADOS
const db = require('./database/db')
db.connect()

// HABILITAR O RECEBIMENTO DE DADOS JSON
app.use(express.json())

// ROTAS
app.use('/api', routes)

// EXECUTANDO O SERVIDOR
const port = process.send.por || 8080
app.listen(port, () => console.log(`Server is listen on port ${port}`))
