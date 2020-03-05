const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../server');

describe('/sessions', () => {
  const userData = { username: 'Sam', email: 'sam@example.com', password: '1234icecream' };
  const loginData = { email: userData.email, password: userData.password };

  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
    });
  });

  beforeEach(async () => {
    await request(app).post('/api/users/new').send(userData);
  })

  it('authorises a user when passed a correct password for existing email', async () => {
    const res = await request(app)
      .post('/api/sessions/new')
      .send(loginData)

    expect(res.statusCode).toBe(200)
    expect(res.body.username).toEqual('Sam')
  });
});
