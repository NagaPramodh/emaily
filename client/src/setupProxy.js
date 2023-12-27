const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      // target: "http://127.0.0.1:5000",
      target: "http://localhost:5000",
    })
  );
};
