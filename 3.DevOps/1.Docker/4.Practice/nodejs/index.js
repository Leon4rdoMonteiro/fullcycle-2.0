const express = require("express")
const mysql = require('mysql')

const server = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config)

sql = "INSERT INTO people(name) values ('Leonardo');"

connection.query(sql)

server.get("/", (req, res) => {
    res.send("<h1>FullCycle 2.0 - Node.js</h1>")
})

server.listen(port, () => console.log(`Server running on port ${port}`))