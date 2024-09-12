const express = require('express');
const router = require('./routes/userRoutes');
const { connect, sql } = require('./config');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1433;

// Middleware
app.use(cors());
app.use(express.json());
app.use(router);

// Probar la conexión a la base de datos
connect();

// Ruta de prueba para verificar la conexión a la base de datos
app.get('/test-db', async (req, res) => {
  try {
    const result = await sql.query('SELECT 1 + 1 AS solution');
    console.log('Resultado de la consulta:', result.recordset);
    res.send(`La solución es: ${result.recordset[0].solution}`);
  } catch (err) {
    console.error('Error al ejecutar la consulta:', err);
    res.status(500).send('Error en la base de datos');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
