const { connect } = require("../../config");

const SPA_Persona = async (req, res) => {
  console.log(req.body);
  const {
    nombre,
    apellido,
    fechaDeNacimiento,
    dni,
    telefono
  } = req.body;

  try {
    const pool = await connect(); // Obtenemos la conexión de la función connect
    const result = await pool.request()
      .input('p_nombre', nombre)
      .input('p_apellido', apellido)
      .input('p_fecha_de_Nacimiento', fechaDeNacimiento)
      .input('p_dni', dni)
      .input('p_telefono', telefono)
      .execute('SPA_persona'); // Ejecuta el procedimiento almacenado en SQL Server

    res.status(200).send(result.recordset[0]); // Enviar el primer resultado
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { SPA_Persona };
