const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (err, people) => {
        if (err != null) {
            console.error('Erro ao listar as pessoas do BD.', err)
            req.status(500).send('Ocorreu um erro ao obter a lista de pessoas')
        }

        let result = '<h1>Full Cycle Rocks!</h1>'
        if (people && people.length >= 0) {
            result += '<ul>'
            for (const person of people) {
                result += `<li>${person.name}</li>`
            }
            result += '</ul>'
        }

        res.send(result);
    })
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})

process.on('exit', () => {
    if (connection) {
        connection.end(() => {
            process.exit(0)
        })
    }
})