require('dotenv').config();
const pool = require('./db');

async function probarConexion() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Conexión exitosa:', res.rows[0]);
  } catch (err) {
    console.error('❌ Error al conectar:', err);
  } finally {
    pool.end(); 
  }
}

probarConexion();
