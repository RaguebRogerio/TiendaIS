const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://83a6-181-94-59-200.ngrok.io/',
      changeOrigin: true,
    })
  );
};