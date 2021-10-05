const app = require('./server');
const request = require('supertest');

test('server is listening to / as an html', done => {
  request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200, done);
})

test('bundle.js is built and the server returns bundle.js', done => {
  request(app)
    .get('/bundle.js')
    .expect('Content-Type', /javascript/)
    .expect(200, done);
})
