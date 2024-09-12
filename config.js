const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT),  // Asegúrate de que el puerto sea un número
  options: {
    encrypt: false, // Usa esta opción si estás usando conexiones encriptadas (ej. Azure)
    trustServerCertificate: true // Usar si necesitas omitir la validación del certificado
  }
};

let poolPromise;

async function connect() {
  try {
    if (!poolPromise) {
      poolPromise = await sql.connect(config);
      console.log('Conexión a la base de datos exitosa');
    }
    return poolPromise;
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
}

module.exports = { connect, sql };
