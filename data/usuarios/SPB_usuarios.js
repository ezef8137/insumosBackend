const { connect } = require("../../config");

const SPB_Usuario = async (req, res) => {
    console.log(req.body);
    const { IdUsuario } = req.body;
  
    try {
      const pool = await connect(); // Obtenemos la conexión de la función connect
      const result = await pool.request()
        .input('IdUsuario', sql.Int, IdUsuario) // Asegúrate de definir el tipo de dato
        .execute('SPB_Usuario'); // Ejecuta el procedimiento almacenado
  
      // Verifica si hay resultados
      if (result.recordset.length > 0) {
        const message = result.recordset[0].Message; // Mensaje de retorno desde el procedimiento almacenado
  
        // Manejo de los códigos de estado basado en el mensaje
        if (Message.includes('éxito')) {
          res.status(200).send({ message });
        } else {
          res.status(400).send({ message });
        }
      } else {
        res.status(404).send({ message: 'No se encontraron resultados.' });
      }
    } catch (err) {
      console.error('Error al ejecutar el procedimiento almacenado:', err);
      res.status(500).send('Error en el servidor');
    }
  };
  
  module.exports = { SPB_Usuario };
  