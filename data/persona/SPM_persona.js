const { connect } = require("../../config");

const SPM_Persona= async (req,res) => {
    console.log(req.body)
    const{
        IdPersona,
        Nombre,
        Apellido,
        FechaNacimiento,
        Dni,
        Telefono
    }= req.body;

    try{
        const pool = await connect();
        const result = await pool.request()
            .input('p_IdPersona', IdPersona)
            .input('p_Nombre', Nombre)
            .input('p_Apellido', Apellido)
            .input('p_FechaNacimiento', FechaNacimiento)
            .input('p_Dni', Dni)
            .input('p_Telefono', Telefono)
            .execute('SPA_persona'); // Ejecuta el procedimiento almacenado en SQL Server
        res.status(200).send(result.recordset[0]); // Enviar el primer resultado
        }catch (err) {
            console.error('Error al ejecutar el procedimiento almacenado:', err);
            res.status(500).send('Error en el servidor');
        }
};
module.exports= {SPM_Persona}