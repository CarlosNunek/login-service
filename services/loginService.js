const connectDB = require('../database/mongoClient');
const bcrypt = require('bcrypt');
const { publishLoginEvent } = require('./redisPublisher');

async function validarCredenciales(cedula, password) {
  const db = await connectDB();
  const user = await db.collection('usuarios').findOne({ cedula });

  if (!user) {
    return { error: 'Usuario no encontrado', status: 401 };
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return { error: 'Contraseña incorrecta', status: 401 };
  }

  await publishLoginEvent(cedula);
  return { mensaje: `Bienvenido ${user.nombres}`, status: 200 };
}

module.exports = { validarCredenciales };
