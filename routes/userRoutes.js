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
const {SPL_Usuario} = require ("../data/usuarios/SPL_usuarios")
const {SPB_Usuario} =require ("../data/usuarios/SPB_usuarios")
const {SPH_Usuario} =require ("../data/usuarios/SPH_usuarios")

//Registro insumo
const {SPA_Insumo} = require ("../data/insumos/SPA_insumo")
const {SPL_Insumo} = require ("../data/insumos/SPL_insumo")
const {SPB_Insumo} = require ("../data/insumos/SPB_insumo")
const {SPM_Insumo} = require ("../data/insumos/SPM_insumo")
const {SPH_Insumo} = require ("../data/insumos/SPH_insumo")

//Login
const {SP_Login} = require ("../data/login/login")

//sedes
const {SPL_Sedes}= require ("../data/sedes/SPL_sedes")

//Cambiar contraseña
const {SPM_Contraseña}= require ("../data/Cambiar_Clave/CambiarClave")

//Recuprar clave
const {ValidacionCorreo}= require ("../data/Recuperar_Clave/RecuperarClave")





//Persona
router.post("/AltaPersona",SPA_Persona)
router.post("/ModificarPersona",SPM_Persona)
router.post("/VerPersona",SPL_Persona)
router.post("/BajaPersona",SPB_Persona)
router.post("/HabilitarPersona",SPH_Persona)
//Usuario
router.post("/AltaUsuario",SPA_Usuario)
router.post("/ModificarUsuario",SPM_Usuario)
router.post("/VerUsuario",SPL_Usuario)
router.post("/BajaUsuario",SPB_Usuario)
router.post("/HabilitarUsuario",SPH_Usuario)

//Insumo
router.post("/AltaInsumo",SPA_Insumo)
router.post("/VerInsumo",SPL_Insumo)
router.post("/BajaInsumo",SPB_Insumo)
router.post("/ModificarInsumo",SPM_Insumo)
router.post("/HabilitarInsumo",SPH_Insumo)

//Login
router.post("/Login",SP_Login)

//sedes
router.post("/VerSedes",SPL_Sedes)

//recuperar clave
router.post("/CambiarClave",SPM_Contraseña)
router.post("/RecuperarClave",ValidacionCorreo)


module.exports = router;