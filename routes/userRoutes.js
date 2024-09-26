const express = require("express");
const router = express.Router();

//Registro
const {SPA_Persona} = require ("../data/persona/SPA_persona")
const {SPM_Persona}= require ("../data/persona/SPM_persona")
const {SPL_Persona}= require("../data/persona/SPL_persona")
const {SPB_Persona}= require("../data/persona/SPB_persona")
const {SPH_Persona}= require("../data/persona/SPH_persona")

//registro usuario
const {SPA_Usuario} = require ("../data/usuarios/SPA_usuarios")
const {SPM_Usuario} = require ("../data/usuarios/SPM_usuarios")


//Persona
router.post("/AltaPersona",SPA_Persona)
router.post("/ModificarPersona",SPM_Persona)
router.post("/VerPersona",SPL_Persona)
router.post("/BajaPersona",SPB_Persona)
router.post("/HabilitarPersona",SPH_Persona)
//Usuario
router.post("/AltaUsuario",SPA_Usuario)
router.post("/ModificarUsuario",SPM_Usuario)



module.exports = router;