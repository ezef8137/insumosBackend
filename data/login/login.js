const { connect } = require("../../config");

const SP_Login = async (req, res) => {
  console.log(req.body);
  const {
    Usuario,
    Clave
  } = req.body;

  try {
    const pool = await connect(); // Obtenemos la conexión de la función connect
    const result = await pool.request()
      .input('Usuario', Usuario)
      .input('Clave', Clave)
      .execute('SP_Login'); // Ejecuta el procedimiento almacenado en SQL Server

      const message = result.recordset[0].Message;

      // Manejo de los códigos de estado basado en el mensaje
      if (message.includes('éxito')) {
        res.status(200).send({ message,message,status:200 });
      } else{
        res.status(400).send({message,message,status:400})
      }
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send('Error en el servidor');
  }
};

module.exports = { SP_Login };
