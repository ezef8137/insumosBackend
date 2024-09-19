const { connect } = require("../../config");

const SPH_Persona = async (req, res) => {
  console.log(req.body);
  const {
    IdPersona
  } = req.body;

  try {
    const pool = await connect(); // Obtenemos la conexión de la función connect
    const result = await pool.request()
      .input('IdPersona', IdPersona)
      .execute('SPH_Persona'); // Ejecuta el procedimiento almacenado en SQL Server

    res.status(200).send(result.recordset);
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { SPH_Persona };
