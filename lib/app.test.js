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

it('PUT candies ', async () => {
  await request(app)
    .put('/api/candies').send({
      candy: 'small',
      second: 'marshmallows',
    })
    .expect(204);
});

it('DELETE candies returns 200', async () => {
  await request(app)
    .delete('/api/candies')
    .expect(200)
});

it('makes a Post to candies', async () => {
  const res = await request(app)
    .post('/api/candies').send({
      candy: 'hamburger flavor',
      second: 'M&M',
    });
    expect(res.status).toEqual(204);
});
  


it('makes a get to cats', async () => {
  await request(app)
    .get('/api/cats')
    .expect(200);
});

it('PUT cats ', async () => {
  await request(app)
    .put('/api/cats')
    .expect(204);
});

it('DELETE cats returns 200', async () => {
  await request(app)
    .delete('/api/cats')
    .expect(200)
});

it('makes a Post to cats', async () => {
  const res = await request(app)
    .post('/api/cats').send({
      size: 'Medium',
      color: 'Red',
    });
    expect(res.status).toEqual(204);
});
  

it('makes a get to sauces', async () => {
  await request(app)
    .get('/api/sauces')
    .expect(200);
});

it('PUT sauces ', async () => {
  await request(app)
    .put('/api/sauces')
    .expect(200);
});

it('DELETE sauces returns 200', async () => {
  await request(app)
    .delete('/api/sauces')
    .expect(200)
});

it('makes a Post to sauces', async () => {
  const res = await request(app)
    .post('/api/sauces').send({
      flavor: 'Hot rub',
      spicy: 'yellow',
    });
    expect(res.status).toEqual(204);
  });

// });
