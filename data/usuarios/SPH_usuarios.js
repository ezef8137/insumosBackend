const { connect } = require("../../config");

const SPH_Usuario = async (req, res) => {
  console.log(req.body);
  const {
    IdUsuario_alta
  } = req.body;

  try {
    const pool = await connect(); // Obtenemos la conexión de la función connect
    const result = await pool.request()
      .input('IdUsuario_alta', IdUsuario_alta)
      .execute('SPH_Usuario'); // Ejecuta el procedimiento almacenado en SQL Server

      const message = result.recordset[0].Message;

      // Manejo de los códigos de estado basado en el mensaje
      if (message.includes('éxito') || message.includes('habilitada')) {
        res.status(200).send({ message });
      } else{
        res.status(400).send({message})
      }
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { SPH_Usuario };
