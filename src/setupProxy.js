const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://462d-181-93-76-153.ngrok.io/',
      changeOrigin: true,
    })
  );
};