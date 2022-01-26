const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://52de-181-93-76-238.ngrok.io/',
      changeOrigin: true,
    })
  );
};