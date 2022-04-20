const express = require('express');
const app = express()
const port = 3000;
const router_nasa= require('./routes/router_nasa.js')
app.use(express.json());//para habilitar la recepcion de datos en un request
app.set('view engine', 'pug');
app.use(express.static('public'));//le decimos a express donde
app.set('views', './views');//Donde se guardan las views
app.use(express.urlencoded());

app.use("/",router_nasa);// API products  importado desde routers
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });