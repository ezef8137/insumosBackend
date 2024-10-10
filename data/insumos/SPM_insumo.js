const { connect } = require("../../config");

const SPM_Insumo = async (req, res) => {
  const {
    IdInsumo,
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
      .input('IdInsumo', IdInsumo)
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
      .execute('SPM_Insumos');

    const message = result.recordset[0].Message;

    // Si el mensaje contiene éxito, enviar 200, sino, enviar 400
    if (message.includes('éxito')) {
      res.status(200).send({ message,message,status:200 });
    } else {
      res.status(400).send({ message,message,status:400 });
    }
  } catch (err) {
    console.error('Error al ejecutar el procedimiento almacenado:', err);
    res.status(500).send({ message: 'Error en el servidor' });
  }
};

module.exports = { SPM_Insumo };
