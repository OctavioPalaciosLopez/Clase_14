const express = require('express')
const app = express()
const port = 9000

app.get('/', function (req, res) {
res.send('Hello World!')
})

app.get('/prueba_otra_ruta', function (req, res) {
    res.send('PRUEBA EXITOSA!')
    })

app.listen(port, function () { 
console.log(`Example app listening on port ${port}!`)
})
