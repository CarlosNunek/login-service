const { publishLoginEvent } = require('../services/redisPublisher');
const redis = require('redis');

jest.mock('redis', () => ({
  createClient: jest.fn(() => ({
    connect: jest.fn().mockResolvedValue(),
    publish: jest.fn().mockResolvedValue()
  }))
}));

describe('publishLoginEvent', () => {
  it('publica mensaje correctamente', async () => {
    await expect(publishLoginEvent('1234567890')).resolves.toBeUndefined();
  });
});

afterAll(() => {
  jest.resetAllMocks();
});
