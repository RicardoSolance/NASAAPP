const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    // res.redirect(`/film/${peli}`);
    res.redirect('/api/astronomy/landings')
});

router.get("/api/astronomy/landings", (req, res) => {
    // res.redirect(`/film/${peli}`);
    res.render('home')
});

module.exports = router;