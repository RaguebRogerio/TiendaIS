const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://1b5c-181-93-78-254.ngrok.io/',
      changeOrigin: true,
    })
  );
};