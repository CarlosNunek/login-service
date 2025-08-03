const request = require('supertest');
const express = require('express');
const router = require('../routes/loginRoutes');

const app = express();
app.use(express.json());
app.use('/', router);

describe('POST /login', () => {
  it('debe rechazar si no se envía cédula o password', async () => {
    const res = await request(app)
      .post('/login')
      .send({ cedula: '' });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Cédula y contraseña requeridos');
  });
});
