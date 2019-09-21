const express = require('express')
const app = express()
const port = 3000

const handleRoute = function (req, res) {
    res.send('Contestando una petición por Get')
}
const handleRoutePost = function (req, res) {
    res.send('Contestando una petición por Post')
}
const handleRoutePut = function (req, res) {
    res.send('Contestando una petición por Put')
}
const handleRouteDelete = function (req, res) {
    res.send('Contestando una petición por Deleted')
}
app.get('/',handleRoute)
app.post('/',handleRoutePost)
app.put('/',handleRoutePut)
app.delete('/',handleRouteDelete)

app.listen(port, function () { 
console.log(`Example app listening on port ${port}!`)
})

