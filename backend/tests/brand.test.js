const request = require('supertest');
const app = require('../app');

describe('Brand API', () => {
  it('should get all brands', async () => {
    const response = await request(app).get('/api/brands');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return JSON format', async () => {
    const response = await request(app).get('/api/brands');
    expect(response.status).toBe(200);
    expect(response.type).toMatch(/json/);
  });

  it('should handle incorrect endpoint', async () => {
    const response = await request(app).get('/api/incorrect');
    expect(response.status).toBe(404);
  });

});
