const { connect } = require("../../config");

const SPA_Insumo = async (req, res) => {
  console.log(req.body);
  const {
    NombreInsumo,
    Descripcion,
    Codigo,
    Cantidad,
    Marca,
    Observacion,
    IdTipoInsumo,
    IdCondicionInsumo,
    IdEstado,
    Ubicacion_Sedes_IdSedes
  } = req.body;

  try {
    const pool = await connect();
    const result = await pool.request()
      .input('NombreInsumo', NombreInsumo)
      .input('Descripcion', Descripcion)
      .input('Codigo', Codigo)
      .input('Cantidad', Cantidad)
      .input('Marca', Marca)
      .input('Observacion', Observacion)
      .input('IdTipoInsumo', IdTipoInsumo)
      .input('IdCondicionInsumo', IdCondicionInsumo)
      .input('IdEstado', IdEstado)
      .input('Ubicacion_Sedes_IdSedes', Ubicacion_Sedes_IdSedes)

      .execute('SPA_Insumos');

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

module.exports = { SPA_Insumo };
