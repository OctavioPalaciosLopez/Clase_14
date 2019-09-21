const express = require('express')
const app = express()
const port = 3000

const handleRoute = function (req, res) {
    res.send('Contestando una petición por Get')
    }
app.get('/',handleRoute)
app.post('/',handleRoute)
app.put('/',handleRoute)
app.delete('/',handleRoute)

app.listen(port, function () { 
console.log(`Example app listening on port ${port}!`)
})

