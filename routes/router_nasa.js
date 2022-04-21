const router = require('express').Router();
const landing = require('../controllers/controllers_landing')
const neas = require('../controllers/controllers_neas')

// ---------------------------------- L A N D I N G S -----------------------------------------------------
    //GET para obtener los nombres y clase de aquellos meteoritos cuya clase sea la registrada (route params)​
    router.get("/astronomy/landings/class/:reclass?",landing.getLandingClass);
    //GET para obtener nombre y masa de uno o más meteoritos cuya masa sea la especificada (route params)​
    router.get("/astronomy/landings/mass/:mass?", landing.getLandingsMass);
    //GET para obtener nombre, masa y fecha de todos los meteoritos caídos en determinadas fechas de la siguiente manera:
    router.get("/astronomy/landings", landing.getLandingsQuery);
    router.post("/astronomy/landings/create", landing.createLanding);
    router.put("/astronomy/landings/edit/:id?", landing.editLanding);
    router.delete("/astronomy/landings/delete/:id?", landing.deleteLanding);

// ---------------------------------- N E A S -----------------------------------------------------

router.get("/astronomy/neas", neas.getNeas);
router.post("/astronomy/neas/create", neas.createNeas);
router.put("/astronomy/neas/edit/:designation?", neas.editNeas);
router.delete("/astronomy/neas/delete/:designation?", neas.deleteNeas);



module.exports = router;