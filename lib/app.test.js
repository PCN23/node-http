import request from 'supertest';
import app from './app.js';

// describe('the server', () => {
//   let server = null;
//   beforeEach(() => {
//     server = server('localhost', undefined);
//   });
//   afterEach(() => {
//     server.close();
//   });

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/not-found');
  
  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).patch('/api/candies');
  expect(status).toBe(404);
  expect(text).toBe('Not Found');
});

it('makes a get to candies', async () => {
  await request(app)
    .get('/api/candies')
    .expect(200);
});
  
  it('makes a Post to candies', async () => {
    const res = await request(app)
      .post('/api/candies').send({
        candy: 'hamburger flavor',
        second: 'M&M',
      });
      expect(res.status).toEqual(204);
    //   expect(res.body).toEqual({
    //   candy: expect.any(String),
    //   second: expect.any(String),
    // });
    
  });

// });
