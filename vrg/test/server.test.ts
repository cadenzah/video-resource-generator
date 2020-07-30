import App from '../src/app'
import request from 'supertest';

describe('Express Server', () => {
  it(`'/test' URI works well`, async (done) => {
    const response = await request(App.app).get('/test');
    expect(response.status).toBe(200);
    done();
  })
});
