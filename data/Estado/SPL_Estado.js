const { connect } = require("../../config");

const formatDate = (dateString) => {
  const date = new Date(dateString);
  // Formato: dd-mm-yyyy
  const formattedDate = date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};

const SPL_Estado = async (req, res) => {
  const { FiltroEstado } = req.body;

  try {
    const pool = await connect(); // Obtenemos la conexión de la función connect
    const result = await pool.request()
      .input('FiltroEstado', FiltroEstado)
      .execute('SPL_Estado'); // Ejecuta el procedimiento almacenado en SQL Server

    // Formatear las fechas del recordset, incluyendo FechaDeNacimiento
    const formattedResult = result.recordset.map(record => {
      return {
        ...record,
        FechaAlta: record.FechaAlta ? formatDate(record.FechaAlta) : null,
        FechaBaja: record.FechaBaja ? formatDate(record.FechaBaja) : null,
      };
    });

    res.status(200).send(formattedResult); // Enviar el recordset con las fechas formateadas
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { SPL_Estado };
