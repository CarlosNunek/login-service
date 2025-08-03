const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT) || 6379
  }
});

client.connect().catch(console.error);

async function publishLoginEvent(cedula) {
  const mensaje = `login exitoso: ${cedula}`;
  await client.publish('login', mensaje);
  console.log(`📢 Evento enviado a Redis → ${mensaje}`);
}

module.exports = { publishLoginEvent };