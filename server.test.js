const app = require('./server');
const request = require('supertest');

test('server is listening to / as an html', done => {
  request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200, done);
})
