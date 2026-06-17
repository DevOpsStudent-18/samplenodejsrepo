const request = require('supertest');
const server = require('../index');

afterAll(() => server.close());

test('GET / returns greeting', async () => {
  const res = await request(server).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toMatch(/Hello from samplenodejsrepo!/);
});
