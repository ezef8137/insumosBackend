const { connect } = require("../../config");

const SPM_Usuario = async (req, res) => {
  console.log(req.body);
  const {
    IdUsuario,
    Usuario,
    IdSede,
    IdRol
  } = req.body;

  try {
    const pool = await connect();
    const result = await pool.request()
      .input('IdUsuario', IdUsuario)
      .input('Usuario', Usuario)
      .input('IdSede', IdSede)
      .input('IdRol', IdRol)
      .execute('SPM_Usuario');

    const message = result.recordset[0].Message;

    // Manejo de los códigos de estado basado en el mensaje
    if (message.includes('éxito')) {
      res.status(200).send({ message,status:200 });
    } else{
      res.status(400).send({message,status:400})
    }
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send({ message: 'Error en el servidor' });
  }
};

module.exports = { SPM_Usuario };
