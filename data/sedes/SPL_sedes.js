const { connect } = require("../../config");

const SPL_Sedes = async (req, res) => {
  const { FiltroSede } = req.body; // Obtener el parámetro de búsqueda

  try {
    const pool = await connect(); // Obtenemos la conexión de la función connect
    const result = await pool.request()
      .input('FiltroSede', FiltroSede) // Pasar el filtro al procedimiento almacenado
      .execute('SPL_Sedes'); // Ejecuta el procedimiento almacenado SPL_Sedes

    // Enviar el recordset directamente
    res.status(200).send(result.recordset);
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { SPL_Sedes };
