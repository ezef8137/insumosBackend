const { connect } = require("../../config");

const SPA_Usuario = async (req, res) => {
  console.log(req.body);
  const {
    Usuario,
    Clave,
    IdPersona,
    IdSede,
    TipoRol_idTipoRol
  } = req.body;

  try {
    const pool = await connect();
    const result = await pool.request()
      .input('Usuario', Usuario)
      .input('Clave', Clave)
      .input('IdPersona', IdPersona)
      .input('IdSede', IdSede)
      .input('TipoRol_idTipoRol', TipoRol_idTipoRol)
      .execute('SPA_Usuario');

    const message = result.recordset[0].Message;

    // Manejo de los códigos de estado basado en el mensaje
    if (message.includes('éxito')) {
      res.status(200).send({ message,status:200 });
    } else{
      res.status(400).send({messagemessage,status:400})
    }
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send({ message: 'Error en el servidor' });
  }
};

module.exports = { SPA_Usuario };
