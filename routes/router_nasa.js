const express = require("express");
const router = express.Router();
const landing = require('../controllers/controllers_landing')


router.get("/", (req, res) => {
    res.redirect('/api/astronomy/landings')
});

router.get("/api/astronomy/landings", (req, res) => {
    // res.redirect(`/film/${peli}`);
    res.render('home')
});


//GET para obtener nombre y masa de todos aquellos meteoritos cuya masa sea igual o superior a una masa (gr) dada (con query parameters)​
router.get("/api/astronomy/landings?minimum_mass=200000", (req, res) => {
    const masa=req.params
    // res.redirect(`/film/${peli}`);
    res.render('home')
});

//GET para obtener nombre y masa de uno o más meteoritos cuya masa sea la especificada (route params)​
router.get("/api/astronomy/landings/mass/200000", (req, res) => {
    const masa=req.params
    // res.redirect(`/film/${peli}`);
    res.render('home')
});


//GET para obtener los nombres y clase de aquellos meteoritos cuya clase sea la registrada (route params)​
router.get("/astronomy/landings/class/L6", (req, res) => {
    const masa=req.params
    // res.redirect(`/film/${peli}`);
    res.render('home')
});

//GET para obtener nombre, masa y fecha de todos los meteoritos caídos en determinadas fechas de la siguiente manera:

router.get("/astronomy/landings", landing.getLandingsQuery);

router.post("/astronomy/landings/create", landing.createLanding);
router.get("/astronomy/landings/create",(req,res)=>{
    res.render('landing')
})


module.exports = router;