const { connect } = require("../../config");

const SPL_Persona = async (req, res) => {
  console.log(req.body);
  const {
    Filtro
  } = req.body;

  try {
    const pool = await connect(); // Obtenemos la conexión de la función connect
    const result = await pool.request()
      .input('Filtro', Filtro)
      .execute('SPL_Persona'); // Ejecuta el procedimiento almacenado en SQL Server

    res.status(200).send(result.recordset);
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { SPL_Persona };
