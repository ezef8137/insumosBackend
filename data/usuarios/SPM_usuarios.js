const { connect } = require("../../config");

const SPM_Usuario = async (req, res) => {
  console.log(req.body);
  const {
    IdUsuario,
    Usuario,
    Clave,
    IdSede,
    TipoRol_idTipoRol
  } = req.body;

  try {
    const pool = await connect();
    const result = await pool.request()
      .input('IdUsuario', IdUsuario)
      .input('Usuario', Usuario)
      .input('Clave', Clave)
      .input('IdSede', IdSede)
      .input('TipoRol_idTipoRol', TipoRol_idTipoRol)
      .execute('SPM_Usuario');

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

module.exports = { SPM_Usuario };
