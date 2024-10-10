const { connect } = require("../../config");

const SPM_Contraseña = async (req, res) => {
  console.log(req.body);
  const {
    IdUsuario,
    ClaveActual,
    NuevaClave
  } = req.body;

  try {
    const pool = await connect();
    const result = await pool.request()
      .input('IdUsuario', IdUsuario)
      .input('ClaveActual', ClaveActual)
      .input('NuevaClave', NuevaClave)
      .execute('SPM_Contraseña');

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

module.exports = { SPM_Contraseña };
