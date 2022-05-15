const Neas = require('../models/model_neas');
const { db } = require('../utils/dbMongo');

const createNeas= async (req,res)=>{
    try {
        const nea = req.body;
        await Neas.create(nea);
        res.status(201).json({"messsage": "Neas created"})
    } catch (error) {
        res.status(400).json({'error': error})
    }
}

const getNeas = async (req, res) => {
    const { from, to } = req.query;
    let clase = req.query.class
    try {
        if (clase) {
            let data = await Neas.find({ orbit_class: clase }, "designation discovery_date orbit_class -_id")
            res.status(200).json(data);
        } else if (from && to) {
            let data = await Neas.find({ discovery_date: { $gte:from, $lte: to}},"designation discovery_date -_id");
            res.status(200).json(data);
        } else if (from) {
            let data = await Neas.find({ discovery_date: { $gte: from } }, 'designation discovery_date -_id');
            res.status(200).json(data);
        } else if (to) {
            let data = await Neas.find({ discovery_date: { $lte: to } }, 'designation discovery_date -_id');
            res.status(200).json(data);
        } else {
            let data = await Neas.find({}, '-_id')
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

const editNeas = async (req, res) => {
    let designation = req.params.designation;
    try {
        if (designation) {
            const nea = req.body
            await Neas.find
            oldNea = await Neas.findOne({ designation: designation })
            oldNea.overwrite(nea);
            await oldNea.save()
            res.status(204).send(' Nea Actualizado con Exito ');
        } else {
            
        }
    } catch (error) {
        res.status(400).json({'error': error})
    }
}

const deleteNeas = async (req, res) => {
    let designation = req.params.designation;
    try {
        if (designation) {
            await Neas.deleteOne({ designation: designation })
            res.status(200).send('Nea Deleted succesfully');
        } else {
            
        }
        
    } catch (error) {
        res.status(400).json({'error': error})
    }
}
    

const neas = {
    createNeas,
    getNeas,
    editNeas,
    deleteNeas
}

module.exports = neas;