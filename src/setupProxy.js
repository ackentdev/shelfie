const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { targer: 'http://localhost:4000/'}))
};