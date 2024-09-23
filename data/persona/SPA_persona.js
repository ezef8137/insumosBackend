const { connect } = require("../../config");

const SPA_Persona = async (req, res) => {
  console.log(req.body);
  const {
    Nombre,
    Apellido,
    FechaDeNacimiento,
    Dni,
    Telefono
  } = req.body;

  try {
    const pool = await connect(); // Obtenemos la conexión de la función connect
    const result = await pool.request()
      .input('p_nombre', Nombre)
      .input('p_apellido', Apellido)
      .input('p_fecha_de_Nacimiento', FechaDeNacimiento)
      .input('p_dni', Dni)
      .input('p_telefono', Telefono)
      .execute('SPA_persona'); // Ejecuta el procedimiento almacenado en SQL Server

    res.status(200).send(result.recordset[0]); // Enviar el primer resultado
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { SPA_Persona };
