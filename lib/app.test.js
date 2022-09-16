import request from 'supertest';
import app from './app.js';

describe('the server', () => {
  let server = null;
  beforeEach(() => {
    server = server('localhost', undefined);
  });
  afterEach(() => {
    server.close();
  });
  it('connects to server port', async () => {
    await request(server)
      .get('/')
      .expect(200);
  });

  it('Returns 404 not found on bad route', async () => {
    const { text, status } = await request(app).get('/not-found');
    
    expect(status).toBe(404);
    expect(text).toBe('Not Found');
  });
  
  it('makes a Post', async () => {
    const res = await request(server)
      .get('posts')
      .expect(200);
    expect(res.body).toEqual({
      candy: expect.any(String),
      second: expect.any(String),
    });
    
  });

});
