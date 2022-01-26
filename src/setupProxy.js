const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://d651-181-93-78-179.ngrok.io/',
      changeOrigin: true,
    })
  );
};