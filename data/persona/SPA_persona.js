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
    const pool = await connect();
    const result = await pool.request()
      .input('p_nombre', Nombre)
      .input('p_apellido', Apellido)
      .input('p_fecha_de_nacimiento', FechaDeNacimiento)
      .input('p_dni', Dni)
      .input('p_telefono', Telefono)
      .execute('SPA_persona');

    const message = result.recordset[0].Message;

    // Manejo de los códigos de estado basado en el mensaje
    if (message.includes('éxito')) {
      res.status(200).send({ message });
    } else{
      res.status(400).send({message})
    }
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send({ message: 'Error en el servidor' });
  }
};

module.exports = { SPA_Persona };
