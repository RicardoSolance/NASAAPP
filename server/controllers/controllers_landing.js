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
        const lan = req.body;
        await Landing.create(lan);
        res.status(201).json({"messsage": "landing created"})
    } catch (error) {
        res.status(400).json({'error': error})
    }
}

const getLandingsQuery = async(req, res) => {

    const { from, to,minimum_mass } = req.query;
    try {
        if(from){
            let data = await Landing.find({'year': {$gte: from}}, 'name mass year -_id')
            res.status(200).json(data);
        } else if(from && to){
            let data = await Landing.find({'year': {$gte: from, $lte: to}}, 'name mass year -_id')
            res.status(200).json(data);
        } else if(to){
           let data = await Landing.find({'year': {$lte: to}}, 'name mass year -_id')
           res.status(200).json(data);
        } else if (minimum_mass) {
            let data = await Landing.find({ 'mass': { $gte: minimum_mass } }, 'name recclass -_id')
            res.status(200).json(data);
        }else{
            data = await Landing.find({})
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json({'error': error})
    }
};



const getLandingsMass = async (req, res) => {
    let data;
    try {
        if(req.params.mass){
            data = await Landing.find({mass: {$gte: req.params.mass}}, '-_id')
            res.status(200).json(data);
        }else{
            data = await Landing.find({})
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json({"error":error})
    }
};

const getLandingClass = async(req, res) => {
    let data;
    try {
        if(req.params.recclass){
            data = await Landing.find({'recclass':req.params.reclass}, '-_id')
            res.status(200).json(data);
        }else{
            data = await Landing.find({}, '-_id')
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json({'error': error})
    }
};

const editLanding = async (req, res) => {

    try {
        if (req.params.id) {
            const newLand = req.body
            oldland = await Landing.findOne({ id: req.params.id })
            oldland.overwrite(newLand);
            await oldland.save()
            res.status(200).send('Actualizado');
        } else {
            
        }
    } catch (error) {
        res.status(400).json({'error': error})
    }
}

const deleteLanding = async (req, res) => {
    
    try {
        if (req.params.id) {
            await Landing.deleteOne({ id: req.params.id })
            res.status(204).send('Landing Deleted');
        } else {
            
        }
        
    } catch (error) {
        res.status(400).json({'error': error})
    }
}
    

const landings = {
    createLanding,
    editLanding,
    deleteLanding,
    getLandingsQuery,
    getLandingsMass,
    getLandingClass
}
module.exports=landings