const express = require("express");
const router = express.Router();

//Registro

const {SPA_Persona} = require ("../data/persona/SPA_persona")
const {SPM_Persona}= require ("../data/persona/SPM_persona")



//Persona
router.post("/AltaPersona",SPA_Persona)
router.post("/ModificarPersona",SPM_Persona)


module.exports = router;