const { connect } = require("../../config");

const SPM_Persona = async (req, res) => {
  const {
    IdPersona,
    Nombre,
    Apellido,
    FechaDeNacimiento,
    Dni,
    Telefono,
    Email
  } = req.body;

  try {
    const pool = await connect();
    const result = await pool.request()
      .input('p_IdPersona', IdPersona)
      .input('p_Nombre', Nombre)
      .input('p_Apellido', Apellido)
      .input('p_FechaNacimiento', FechaDeNacimiento)
      .input('p_Dni', Dni)
      .input('p_Telefono', Telefono)
      .input('p_Email',Email)
      .execute('SPM_Persona');

    const message = result.recordset[0].Message;

    // Si el mensaje contiene éxito, enviar 200, sino, enviar 400
    if (message.includes('con éxito')) {
      res.status(200).send({ message });
    } else {
      res.status(400).send({ message });
    }
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send({ message: 'Error en el servidor' });
  }
};

module.exports = { SPM_Persona };
