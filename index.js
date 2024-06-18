const express = require('express')
const app = express()
const port = 3000



app.get('/suma/:sumando1/:sumando2', (req, res) => {
  var suma1 = Number(req.params.sumando1);
  var suma2 = Number(req.params.sumando2);
  resultado = suma1 + suma2;
      res.send("resultado")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
