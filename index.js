const express = require('express')
const app = express()
const port = 3000



app.get('/suma/:sumando1&:sumando2', (req, res) => {
    var suma1 = Number(req.params.sumando1);
    var suma2 = Number(req.params.sumando2);
    resultado = suma1 + suma2;
    res.send('resultado')
})

app.get('/multiplicacion/:multiplicando1&:multiplicando2', (req, res) => {
    var mult1 = Number(req.params.multiplicando1);
    var mult2 = Number(req.params.multiplicando2);
    resultado = mult1 * mult2;
    res.send('resultado')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
