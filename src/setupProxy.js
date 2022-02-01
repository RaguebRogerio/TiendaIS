const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://19dc-181-93-79-25.ngrok.io/',
      changeOrigin: true,
    })
  );
};