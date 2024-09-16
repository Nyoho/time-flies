import app from './server';
import http from 'http';

const makeRequest = (path, expectedContentType, expectedStatusCode, done) => {
  const options = {
    hostname: 'localhost',
    port: 3000,
    path: path,
    method: 'GET'
  };

  const req = http.request(options, res => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        expect(res.headers['content-type']).toMatch(expectedContentType);
        expect(res.statusCode).toBe(expectedStatusCode);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  req.on('error', error => {
    done(error);
  });

  req.end();
};

test('server is listening to / as an html', done => {
  makeRequest('/', /html/, 200, done);
});

test('bundle.js is built and the server returns bundle.js', done => {
  makeRequest('/bundle.js', /javascript/, 200, done);
});
