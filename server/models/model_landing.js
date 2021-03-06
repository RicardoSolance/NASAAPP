const mongoose = require('mongoose');

const objectSchema = {
    name: String,
    id: String,
    nametype: String,
    recclass: String,
    mass: Number,
    fall: String,
    year: String,
    reclat: String,
    reclong: String,
    geolocation: {
        latitude: String,
        longitude: String
    }
}

const landingSchema = mongoose.Schema(objectSchema);
//la colections LAnding
const Landing = mongoose.model('landings', landingSchema);
module.exports = Landing;