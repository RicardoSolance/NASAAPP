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
    console.log(req.body);
    try {
        const lan = req.body;
        await Landing.create(lan);
        res.status(201).json({"messsage": "landi created"})
    } catch (error) {
        
    }
}

const getLandingsQuery = async(req, res) => {
    let data;
    // const { from, to } = req.query;
    try {
        if(req.query.from){
            data = await Landing.find({'year': {$gte: req.query.from}}, 'name mass year -_id')
            res.status(200).json(data);
        } else if(req.query.from && req.query.to){
            data = await Landing.find({'year': {$gte: req.query.from, $lte: req.query.to}}, 'name mass year -_id')
            res.status(200).json(data);
        } else if(req.query.to){
           data = await Landing.find({'year': {$lte: req.query.to}}, 'name mass year -_id')
            res.status(200).json(data);
        } else if (req.query.minimum_mass) {
            data = await Landing.find({ 'mass': { $gte: req.query.minimum_mass } }, 'name recclass -_id')
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(400).json({'error': error})
    }
};

const getLandingsMass = async(req, res) => {
    let data;
    try {
        if(req.params.mass){
            console.log(req.params.mass)
            data = await Landing.find({mass: {$gte: req.params.mass}}, 'name mass -_id')
            console.log(data)
            res.status(200).json(data);
        }else{
            data = await Landing.find({})
            console.log(data)
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
            data = await Landing.find({'recclass':req.params.reclass}, 'name recclass -_id')
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
    let data;
    console.log('reaccctt');
    console.log(req.body);
    console.log(req.params.id);
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
            res.status(204).send('Borrado');
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