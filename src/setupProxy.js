const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://fcaa-181-93-79-111.ngrok.io/',
      changeOrigin: true,
    })
  );
};