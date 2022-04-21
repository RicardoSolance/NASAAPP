const mongoose = require("mongoose");
//const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
mongoose.connect("mongodb://localhost:27017/nasa", { useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("conectado a la BD"));
module.exports = mongoose;