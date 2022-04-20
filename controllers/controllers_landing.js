const Landing = require('../models/model_landing')
const { db } = require('../utils/dbMongo');

///convierte String en Numero
// const toNumber = async() => { 
//     await Landing.updateMany(
//         { 'mass': { $type: 2 } },
//     [{ $set: { 'mass': { $toDouble: '$mass' } } }]
//         ) 
// } 
// toNumber()

const createLanding = async (req, res) => {
    try {
        const lan = new Landing({
            name: req.body.name,
            id: req.body.id,
            nametype: req.body.nametype,
            recclass: req.body.recclass,
            mass: req.body.mass,
            fall: req.body.fall,
            year: req.body.year,
            reclat: req.body.reclat,
            reclong: req.body.reclong,
            geolocation: {
                latitude: req.body.latitude,
                longitude: req.body.longitude,
            }
        })

        const land = await lan.save();
        res.status(201).json({land})
    } catch (error) {
        
    }
}


const getLandingsQuery = async(req, res) => {
   
    // const { from, to } = req.body;
    try {
        if(req.query.from){
            let data = await Landing.find({'year': {$gte: req.query.from}}, 'name mass year -_id')
            res.status(200).json(data);
        } else if(req.query.from && req.query.to){
           let  data = await Landing.find({'year': {$gte: req.query.from, $lte: req.query.to}}, 'name mass year -_id')
            res.status(200).json(data);
        } else if(req.query.to){
           let data = await Landing.find({'year': {$lte: req.query.to}}, 'name mass year -_id')
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(400).json({'error': error})
    }
};

const landings = {
    createLanding,
    getLandingsQuery
}
module.exports=landings