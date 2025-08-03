const { validarCredenciales } = require('../services/loginService');
jest.mock('../database/mongoClient');
jest.mock('../services/redisPublisher');

const connectDB = require('../database/mongoClient');

describe('validarCredenciales', () => {
  it('retorna error si usuario no existe', async () => {
    connectDB.mockResolvedValueOnce({
      collection: () => ({
        findOne: () => null
      })
    });

    const res = await validarCredenciales('0000000000', '123456');
    expect(res.status).toBe(401);
    expect(res.error).toBe('Usuario no encontrado');
  });

  it('retorna error si contraseña es incorrecta', async () => {
    connectDB.mockResolvedValueOnce({
      collection: () => ({
        findOne: () => ({
          cedula: '1234567890',
          password: '$2b$10$clavehash' // clave hash falsa
        })
      })
    });

    const res = await validarCredenciales('1234567890', 'incorrecta');
    expect(res.status).toBe(401);
    expect(res.error).toBe('Contraseña incorrecta');
  });
});
