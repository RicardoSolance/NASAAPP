require("dotenv").config(); //PARA las variables de entorno
const express = require('express');
const app = express()
const port = 3000;
const router_nasa= require('./routes/router_nasa.js')
app.use(express.json());//para habilitar la recepcion de datos en un request
app.set('view engine', 'pug');
app.use(express.static('public'));
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

app.use("/api",router_nasa);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });